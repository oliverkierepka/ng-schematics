import { Tree, filter, noop, Rule } from '@angular-devkit/schematics';

/**
 * Don't add file at `path` if it already exists
 */
export function filterExistingPath(tree: Tree, path: string): Rule {
  return tree.exists(path) ? filter((_path) => !_path.endsWith(path)) : noop();
}