import { reduce, keys } from "ramda";

export const reduceCollectionToType = collection => <T>(
  currentMemberMapper
): T =>
  reduce(
    (acc, curr) => ({ ...acc, ...currentMemberMapper(curr, collection) }),
    {} as T,
    keys(collection)
  );
