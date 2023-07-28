import {MetaobjectDefinition} from './types-admin-api.js';
import {basename, joinPath} from '@shopify/cli-kit/node/path';
import {writeFile} from '@shopify/cli-kit/node/fs';
// import {camelize} from '@shopify/cli-kit/common/string';
import {formatCode} from '../format-code.js';
import {glob} from '@shopify/cli-kit/node/fs';

export async function findSectionSchemaPaths(appDirectory: string) {
  const relativeSectionPaths = await glob('**/*.schema.{js,ts}', {
    cwd: appDirectory,
  });
  return relativeSectionPaths.map((relativeFilepath) =>
    joinPath(appDirectory, relativeFilepath),
  );
}

export async function generateSectionsComponent(
  metaobjectDefinitions: Record<
    string,
    MetaobjectDefinition | undefined | null
  >,
  appDirectory: string,
) {
  console.log('GENERATING Sections.tsx');

  const allSectionNames = (await findSectionSchemaPaths(appDirectory)).map(
    (filepath) => basename(filepath, '.schema.ts'),
  );

  const sectionsPath = joinPath(appDirectory, 'sections', 'Sections.tsx');
  const componentImports: string[] = [];
  const typeImports: string[] = [];
  const sectionTypes: string[] = [];
  const switchCases: string[] = [];
  // const sectionQueries: string[] = [];
  // const gqlVariables: string[] = [];
  // const fragmentEmbeddings: string[] = [];

  for (const componentName of allSectionNames) {
    // Dirty checks, TODO: fix the world
    const definition = Object.values(metaobjectDefinitions).find(
      (value) =>
        value?.name ===
        'Section | ' + componentName.replace(/([a-z])([A-Z])/g, '$1 $2'),
    );

    if (!definition) continue;

    // const fragmentsName =
    //   value.name
    //     .replace(/^Section \| /g, '')
    //     .replace(/\s+/g, '_')
    //     .toUpperCase() + '_FRAGMENTS';

    const fragmentTypeName = `${componentName}Fragment`;

    componentImports.push(
      `import {${componentName}} from './${componentName}';`,
      // `\nimport {${fragmentsName}} from './${componentName}.schema';`,
    );
    typeImports.push(`${fragmentTypeName},`);
    sectionTypes.push(fragmentTypeName);
    switchCases.push(
      `case '${definition.type}':\n  return <${componentName} {...section} key={section.id} />;`,
    );
    // sectionQueries.push(
    //   `${camelize(componentName)}: metaobject(handle: { handle: $${camelize(
    //     componentName,
    //   )}Handle, type: "section_${key}" }) {
    //     ...${componentName}
    //   }`,
    // );

    // gqlVariables.push(`\$${camelize(componentName)}Handle: String!`);
    // fragmentEmbeddings.push(`\${${fragmentsName}}`);
  }

  if (
    componentImports.length === 0 ||
    typeImports.length === 0 ||
    sectionTypes.length === 0 ||
    switchCases.length === 0
  ) {
    console.warn('No schemas found');
    return;
  }

  const content = template
    .replace('#ComponentImports#', componentImports.join('\n'))
    .replace('#TypeImports#', typeImports.join('\n'))
    .replace('#SectionTypes#', sectionTypes.join(' | '))
    .replace('#SwitchCases#', switchCases.join('\n'));
  // .replace('#SectionsQuery#', sectionQueries.join('\n'))
  // .replace('#GqlVariables#', gqlVariables.join(', '))
  // .replace('#FragmentEmbeddings#', fragmentEmbeddings.join('\n'));

  await writeFile(sectionsPath, formatCode(content, undefined, sectionsPath));
}

const template = `
/*
 * This component is autogenerated. Do not modify it manually.
 */

#ComponentImports#
import type {
#TypeImports#
} from 'storefrontapi.generated';

export type SectionTypes = #SectionTypes#;
export type RouteSections = Array<SectionTypes>;

export function Sections({sections}: {sections: Array<SectionTypes>}) {
  return (
    <>
      {sections.map((section) => {
        switch (section?.type) {
          #SwitchCases#
          default:
            return null;
        }
      })}
    </>
  );
}
`;

// export const SECTIONS_QUERY = \`#graphql
//   query SectionsQuery(#GqlVariables#) {
//     #SectionsQuery#
//   }
//   #FragmentEmbeddings#
// \`;