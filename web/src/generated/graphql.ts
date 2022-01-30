export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: "File";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export enum GatsbyImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum GatsbyImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars["JSON"]>;
  glob?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  ne?: InputMaybe<Scalars["JSON"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  regex?: InputMaybe<Scalars["JSON"]>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allSanityAuthor: SanityAuthorConnection;
  allSanityCategory: SanityCategoryConnection;
  allSanityFileAsset: SanityFileAssetConnection;
  allSanityImageAsset: SanityImageAssetConnection;
  allSanityPost: SanityPostConnection;
  allSanitySiteSettings: SanitySiteSettingsConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  sanityAuthor?: Maybe<SanityAuthor>;
  sanityCategory?: Maybe<SanityCategory>;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  sanityPost?: Maybe<SanityPost>;
  sanitySiteSettings?: Maybe<SanitySiteSettings>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllSanityAuthorArgs = {
  filter?: InputMaybe<SanityAuthorFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SanityAuthorSortInput>;
};

export type QueryAllSanityCategoryArgs = {
  filter?: InputMaybe<SanityCategoryFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SanityCategorySortInput>;
};

export type QueryAllSanityFileAssetArgs = {
  filter?: InputMaybe<SanityFileAssetFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SanityFileAssetSortInput>;
};

export type QueryAllSanityImageAssetArgs = {
  filter?: InputMaybe<SanityImageAssetFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SanityImageAssetSortInput>;
};

export type QueryAllSanityPostArgs = {
  filter?: InputMaybe<SanityPostFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SanityPostSortInput>;
};

export type QueryAllSanitySiteSettingsArgs = {
  filter?: InputMaybe<SanitySiteSettingsFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SanitySiteSettingsSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QuerySanityAuthorArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBio?: InputMaybe<JsonQueryOperatorInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  bio?: InputMaybe<SanityBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<SanityMainImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
};

export type QuerySanityCategoryArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySanityFileAssetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySanityImageAssetArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySanityPostArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAuthors?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawExcerpt?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  authors?: InputMaybe<SanityAuthorReferenceFilterListInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mainImage?: InputMaybe<SanityMainImageFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySanitySiteSettingsArgs = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceData = {
  __typename?: "SanityAssetSourceData";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAuthor = Node &
  SanityDocument & {
    __typename?: "SanityAuthor";
    _createdAt?: Maybe<Scalars["Date"]>;
    _id?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    _rawBio?: Maybe<Scalars["JSON"]>;
    _rawImage?: Maybe<Scalars["JSON"]>;
    _rawSlug?: Maybe<Scalars["JSON"]>;
    _rev?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    bio?: Maybe<Array<Maybe<SanityBlock>>>;
    children: Array<Node>;
    id: Scalars["ID"];
    image?: Maybe<SanityMainImage>;
    internal: Internal;
    name?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    slug?: Maybe<SanitySlug>;
  };

export type SanityAuthor_CreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityAuthor_RawBioArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAuthor_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAuthor_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAuthor_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityAuthorConnection = {
  __typename?: "SanityAuthorConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityAuthorEdge>;
  group: Array<SanityAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityAuthorConnectionDistinctArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorConnectionGroupArgs = {
  field: SanityAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityAuthorConnectionMaxArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorConnectionMinArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorConnectionSumArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorEdge = {
  __typename?: "SanityAuthorEdge";
  next?: Maybe<SanityAuthor>;
  node: SanityAuthor;
  previous?: Maybe<SanityAuthor>;
};

export enum SanityAuthorFieldsEnum {
  CreatedAt = "_createdAt",
  Id = "_id",
  Key = "_key",
  RawBio = "_rawBio",
  RawImage = "_rawImage",
  RawSlug = "_rawSlug",
  Rev = "_rev",
  Type = "_type",
  UpdatedAt = "_updatedAt",
  Bio = "bio",
  BioKey = "bio____key",
  BioRawChildren = "bio____rawChildren",
  BioType = "bio____type",
  BioChildren = "bio___children",
  BioChildrenKey = "bio___children____key",
  BioChildrenType = "bio___children____type",
  BioChildrenMarks = "bio___children___marks",
  BioChildrenText = "bio___children___text",
  BioList = "bio___list",
  BioStyle = "bio___style",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  ImageKey = "image____key",
  ImageRawAsset = "image____rawAsset",
  ImageRawCrop = "image____rawCrop",
  ImageRawHotspot = "image____rawHotspot",
  ImageType = "image____type",
  ImageAlt = "image___alt",
  ImageAssetCreatedAt = "image___asset____createdAt",
  ImageAssetId = "image___asset____id",
  ImageAssetKey = "image___asset____key",
  ImageAssetRawMetadata = "image___asset____rawMetadata",
  ImageAssetRawSource = "image___asset____rawSource",
  ImageAssetRev = "image___asset____rev",
  ImageAssetType = "image___asset____type",
  ImageAssetUpdatedAt = "image___asset____updatedAt",
  ImageAssetAltText = "image___asset___altText",
  ImageAssetAssetId = "image___asset___assetId",
  ImageAssetChildren = "image___asset___children",
  ImageAssetChildrenChildren = "image___asset___children___children",
  ImageAssetChildrenId = "image___asset___children___id",
  ImageAssetDescription = "image___asset___description",
  ImageAssetExtension = "image___asset___extension",
  ImageAssetGatsbyImageData = "image___asset___gatsbyImageData",
  ImageAssetId = "image___asset___id",
  ImageAssetInternalContent = "image___asset___internal___content",
  ImageAssetInternalContentDigest = "image___asset___internal___contentDigest",
  ImageAssetInternalDescription = "image___asset___internal___description",
  ImageAssetInternalFieldOwners = "image___asset___internal___fieldOwners",
  ImageAssetInternalIgnoreType = "image___asset___internal___ignoreType",
  ImageAssetInternalMediaType = "image___asset___internal___mediaType",
  ImageAssetInternalOwner = "image___asset___internal___owner",
  ImageAssetInternalType = "image___asset___internal___type",
  ImageAssetLabel = "image___asset___label",
  ImageAssetMetadataKey = "image___asset___metadata____key",
  ImageAssetMetadataRawDimensions = "image___asset___metadata____rawDimensions",
  ImageAssetMetadataRawLocation = "image___asset___metadata____rawLocation",
  ImageAssetMetadataRawPalette = "image___asset___metadata____rawPalette",
  ImageAssetMetadataType = "image___asset___metadata____type",
  ImageAssetMetadataHasAlpha = "image___asset___metadata___hasAlpha",
  ImageAssetMetadataIsOpaque = "image___asset___metadata___isOpaque",
  ImageAssetMetadataLqip = "image___asset___metadata___lqip",
  ImageAssetMimeType = "image___asset___mimeType",
  ImageAssetOriginalFilename = "image___asset___originalFilename",
  ImageAssetParentChildren = "image___asset___parent___children",
  ImageAssetParentId = "image___asset___parent___id",
  ImageAssetPath = "image___asset___path",
  ImageAssetSha1hash = "image___asset___sha1hash",
  ImageAssetSize = "image___asset___size",
  ImageAssetSourceKey = "image___asset___source____key",
  ImageAssetSourceType = "image___asset___source____type",
  ImageAssetSourceId = "image___asset___source___id",
  ImageAssetSourceName = "image___asset___source___name",
  ImageAssetSourceUrl = "image___asset___source___url",
  ImageAssetTitle = "image___asset___title",
  ImageAssetUrl = "image___asset___url",
  ImageCaption = "image___caption",
  ImageCropKey = "image___crop____key",
  ImageCropType = "image___crop____type",
  ImageCropBottom = "image___crop___bottom",
  ImageCropLeft = "image___crop___left",
  ImageCropRight = "image___crop___right",
  ImageCropTop = "image___crop___top",
  ImageHotspotKey = "image___hotspot____key",
  ImageHotspotType = "image___hotspot____type",
  ImageHotspotHeight = "image___hotspot___height",
  ImageHotspotWidth = "image___hotspot___width",
  ImageHotspotX = "image___hotspot___x",
  ImageHotspotY = "image___hotspot___y",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  SlugKey = "slug____key",
  SlugType = "slug____type",
  SlugCurrent = "slug___current",
}

export type SanityAuthorFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawBio?: InputMaybe<JsonQueryOperatorInput>;
  _rawImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  bio?: InputMaybe<SanityBlockFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<SanityMainImageFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
};

export type SanityAuthorGroupConnection = {
  __typename?: "SanityAuthorGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityAuthorEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SanityAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityAuthorGroupConnectionDistinctArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorGroupConnectionGroupArgs = {
  field: SanityAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityAuthorGroupConnectionMaxArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorGroupConnectionMinArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorGroupConnectionSumArgs = {
  field: SanityAuthorFieldsEnum;
};

export type SanityAuthorReference = {
  __typename?: "SanityAuthorReference";
  _key?: Maybe<Scalars["String"]>;
  _rawAuthor?: Maybe<Scalars["JSON"]>;
  _type?: Maybe<Scalars["String"]>;
  author?: Maybe<SanityAuthor>;
};

export type SanityAuthorReference_RawAuthorArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAuthorReferenceFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
};

export type SanityAuthorReferenceFilterListInput = {
  elemMatch?: InputMaybe<SanityAuthorReferenceFilterInput>;
};

export type SanityAuthorReferenceOrSpan = SanityAuthorReference | SanitySpan;

export type SanityAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityBlock = {
  __typename?: "SanityBlock";
  _key?: Maybe<Scalars["String"]>;
  _rawChildren?: Maybe<Scalars["JSON"]>;
  _type?: Maybe<Scalars["String"]>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  list?: Maybe<Scalars["String"]>;
  style?: Maybe<Scalars["String"]>;
};

export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawChildren?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<SanitySpanFilterListInput>;
  list?: InputMaybe<StringQueryOperatorInput>;
  style?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: InputMaybe<SanityBlockFilterInput>;
};

export type SanityBlockOrMainImage = SanityBlock | SanityMainImage;

export type SanityCategory = Node &
  SanityDocument & {
    __typename?: "SanityCategory";
    _createdAt?: Maybe<Scalars["Date"]>;
    _id?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    _rev?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    children: Array<Node>;
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    parent?: Maybe<Node>;
    title?: Maybe<Scalars["String"]>;
  };

export type SanityCategory_CreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityCategory_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityCategoryConnection = {
  __typename?: "SanityCategoryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityCategoryEdge>;
  group: Array<SanityCategoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityCategoryConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryConnectionGroupArgs = {
  field: SanityCategoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityCategoryConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryEdge = {
  __typename?: "SanityCategoryEdge";
  next?: Maybe<SanityCategory>;
  node: SanityCategory;
  previous?: Maybe<SanityCategory>;
};

export enum SanityCategoryFieldsEnum {
  CreatedAt = "_createdAt",
  Id = "_id",
  Key = "_key",
  Rev = "_rev",
  Type = "_type",
  UpdatedAt = "_updatedAt",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Title = "title",
}

export type SanityCategoryFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityCategoryFilterListInput = {
  elemMatch?: InputMaybe<SanityCategoryFilterInput>;
};

export type SanityCategoryGroupConnection = {
  __typename?: "SanityCategoryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityCategoryEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SanityCategoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityCategoryGroupConnectionDistinctArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryGroupConnectionGroupArgs = {
  field: SanityCategoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityCategoryGroupConnectionMaxArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryGroupConnectionMinArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategoryGroupConnectionSumArgs = {
  field: SanityCategoryFieldsEnum;
};

export type SanityCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** A Sanity document */
export type SanityDocument = {
  _createdAt?: Maybe<Scalars["Date"]>;
  _id?: Maybe<Scalars["String"]>;
  _rev?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  _updatedAt?: Maybe<Scalars["Date"]>;
};

export type SanityFile = {
  __typename?: "SanityFile";
  _key?: Maybe<Scalars["String"]>;
  _rawAsset?: Maybe<Scalars["JSON"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityFileAsset>;
};

export type SanityFile_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset = Node &
  SanityDocument & {
    __typename?: "SanityFileAsset";
    _createdAt?: Maybe<Scalars["Date"]>;
    _id?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    _rawSource?: Maybe<Scalars["JSON"]>;
    _rev?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    altText?: Maybe<Scalars["String"]>;
    assetId?: Maybe<Scalars["String"]>;
    children: Array<Node>;
    description?: Maybe<Scalars["String"]>;
    extension?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    label?: Maybe<Scalars["String"]>;
    mimeType?: Maybe<Scalars["String"]>;
    originalFilename?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    path?: Maybe<Scalars["String"]>;
    sha1hash?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    source?: Maybe<SanityAssetSourceData>;
    title?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
  };

export type SanityFileAsset_CreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityFileAsset_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityFileAssetConnection = {
  __typename?: "SanityFileAssetConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityFileAssetEdge>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  __typename?: "SanityFileAssetEdge";
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export enum SanityFileAssetFieldsEnum {
  CreatedAt = "_createdAt",
  Id = "_id",
  Key = "_key",
  RawSource = "_rawSource",
  Rev = "_rev",
  Type = "_type",
  UpdatedAt = "_updatedAt",
  AltText = "altText",
  AssetId = "assetId",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  Extension = "extension",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Label = "label",
  MimeType = "mimeType",
  OriginalFilename = "originalFilename",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  Sha1hash = "sha1hash",
  Size = "size",
  SourceKey = "source____key",
  SourceType = "source____type",
  SourceId = "source___id",
  SourceName = "source___name",
  SourceUrl = "source___url",
  Title = "title",
  Url = "url",
}

export type SanityFileAssetFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityFileAssetGroupConnection = {
  __typename?: "SanityFileAssetGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityFileAssetEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SanityFileAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetGroupConnectionGroupArgs = {
  field: SanityFileAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SanityGatsbyImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
}

export type SanityGeopoint = {
  __typename?: "SanityGeopoint";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  alt?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
  lng?: Maybe<Scalars["Float"]>;
};

export type SanityGeopointFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  alt?: InputMaybe<FloatQueryOperatorInput>;
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lng?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImage = {
  __typename?: "SanityImage";
  _key?: Maybe<Scalars["String"]>;
  _rawAsset?: Maybe<Scalars["JSON"]>;
  _rawCrop?: Maybe<Scalars["JSON"]>;
  _rawHotspot?: Maybe<Scalars["JSON"]>;
  _type?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type SanityImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = Node &
  SanityDocument & {
    __typename?: "SanityImageAsset";
    _createdAt?: Maybe<Scalars["Date"]>;
    _id?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    _rawMetadata?: Maybe<Scalars["JSON"]>;
    _rawSource?: Maybe<Scalars["JSON"]>;
    _rev?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    altText?: Maybe<Scalars["String"]>;
    assetId?: Maybe<Scalars["String"]>;
    children: Array<Node>;
    description?: Maybe<Scalars["String"]>;
    extension?: Maybe<Scalars["String"]>;
    gatsbyImageData: Scalars["JSON"];
    id: Scalars["ID"];
    internal: Internal;
    label?: Maybe<Scalars["String"]>;
    metadata?: Maybe<SanityImageMetadata>;
    mimeType?: Maybe<Scalars["String"]>;
    originalFilename?: Maybe<Scalars["String"]>;
    parent?: Maybe<Node>;
    path?: Maybe<Scalars["String"]>;
    sha1hash?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    source?: Maybe<SanityAssetSourceData>;
    title?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
  };

export type SanityImageAsset_CreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityImageAssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  fit?: InputMaybe<SanityImageFit>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  height?: InputMaybe<Scalars["Int"]>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  sizes?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type SanityImageAssetConnection = {
  __typename?: "SanityImageAssetConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityImageAssetEdge>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  __typename?: "SanityImageAssetEdge";
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export enum SanityImageAssetFieldsEnum {
  CreatedAt = "_createdAt",
  Id = "_id",
  Key = "_key",
  RawMetadata = "_rawMetadata",
  RawSource = "_rawSource",
  Rev = "_rev",
  Type = "_type",
  UpdatedAt = "_updatedAt",
  AltText = "altText",
  AssetId = "assetId",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  Extension = "extension",
  GatsbyImageData = "gatsbyImageData",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Label = "label",
  MetadataKey = "metadata____key",
  MetadataRawDimensions = "metadata____rawDimensions",
  MetadataRawLocation = "metadata____rawLocation",
  MetadataRawPalette = "metadata____rawPalette",
  MetadataType = "metadata____type",
  MetadataDimensionsKey = "metadata___dimensions____key",
  MetadataDimensionsType = "metadata___dimensions____type",
  MetadataDimensionsAspectRatio = "metadata___dimensions___aspectRatio",
  MetadataDimensionsHeight = "metadata___dimensions___height",
  MetadataDimensionsWidth = "metadata___dimensions___width",
  MetadataHasAlpha = "metadata___hasAlpha",
  MetadataIsOpaque = "metadata___isOpaque",
  MetadataLocationKey = "metadata___location____key",
  MetadataLocationType = "metadata___location____type",
  MetadataLocationAlt = "metadata___location___alt",
  MetadataLocationLat = "metadata___location___lat",
  MetadataLocationLng = "metadata___location___lng",
  MetadataLqip = "metadata___lqip",
  MetadataPaletteKey = "metadata___palette____key",
  MetadataPaletteRawDarkMuted = "metadata___palette____rawDarkMuted",
  MetadataPaletteRawDarkVibrant = "metadata___palette____rawDarkVibrant",
  MetadataPaletteRawDominant = "metadata___palette____rawDominant",
  MetadataPaletteRawLightMuted = "metadata___palette____rawLightMuted",
  MetadataPaletteRawLightVibrant = "metadata___palette____rawLightVibrant",
  MetadataPaletteRawMuted = "metadata___palette____rawMuted",
  MetadataPaletteRawVibrant = "metadata___palette____rawVibrant",
  MetadataPaletteType = "metadata___palette____type",
  MetadataPaletteDarkMutedKey = "metadata___palette___darkMuted____key",
  MetadataPaletteDarkMutedType = "metadata___palette___darkMuted____type",
  MetadataPaletteDarkMutedBackground = "metadata___palette___darkMuted___background",
  MetadataPaletteDarkMutedForeground = "metadata___palette___darkMuted___foreground",
  MetadataPaletteDarkMutedPopulation = "metadata___palette___darkMuted___population",
  MetadataPaletteDarkMutedTitle = "metadata___palette___darkMuted___title",
  MetadataPaletteDarkVibrantKey = "metadata___palette___darkVibrant____key",
  MetadataPaletteDarkVibrantType = "metadata___palette___darkVibrant____type",
  MetadataPaletteDarkVibrantBackground = "metadata___palette___darkVibrant___background",
  MetadataPaletteDarkVibrantForeground = "metadata___palette___darkVibrant___foreground",
  MetadataPaletteDarkVibrantPopulation = "metadata___palette___darkVibrant___population",
  MetadataPaletteDarkVibrantTitle = "metadata___palette___darkVibrant___title",
  MetadataPaletteDominantKey = "metadata___palette___dominant____key",
  MetadataPaletteDominantType = "metadata___palette___dominant____type",
  MetadataPaletteDominantBackground = "metadata___palette___dominant___background",
  MetadataPaletteDominantForeground = "metadata___palette___dominant___foreground",
  MetadataPaletteDominantPopulation = "metadata___palette___dominant___population",
  MetadataPaletteDominantTitle = "metadata___palette___dominant___title",
  MetadataPaletteLightMutedKey = "metadata___palette___lightMuted____key",
  MetadataPaletteLightMutedType = "metadata___palette___lightMuted____type",
  MetadataPaletteLightMutedBackground = "metadata___palette___lightMuted___background",
  MetadataPaletteLightMutedForeground = "metadata___palette___lightMuted___foreground",
  MetadataPaletteLightMutedPopulation = "metadata___palette___lightMuted___population",
  MetadataPaletteLightMutedTitle = "metadata___palette___lightMuted___title",
  MetadataPaletteLightVibrantKey = "metadata___palette___lightVibrant____key",
  MetadataPaletteLightVibrantType = "metadata___palette___lightVibrant____type",
  MetadataPaletteLightVibrantBackground = "metadata___palette___lightVibrant___background",
  MetadataPaletteLightVibrantForeground = "metadata___palette___lightVibrant___foreground",
  MetadataPaletteLightVibrantPopulation = "metadata___palette___lightVibrant___population",
  MetadataPaletteLightVibrantTitle = "metadata___palette___lightVibrant___title",
  MetadataPaletteMutedKey = "metadata___palette___muted____key",
  MetadataPaletteMutedType = "metadata___palette___muted____type",
  MetadataPaletteMutedBackground = "metadata___palette___muted___background",
  MetadataPaletteMutedForeground = "metadata___palette___muted___foreground",
  MetadataPaletteMutedPopulation = "metadata___palette___muted___population",
  MetadataPaletteMutedTitle = "metadata___palette___muted___title",
  MetadataPaletteVibrantKey = "metadata___palette___vibrant____key",
  MetadataPaletteVibrantType = "metadata___palette___vibrant____type",
  MetadataPaletteVibrantBackground = "metadata___palette___vibrant___background",
  MetadataPaletteVibrantForeground = "metadata___palette___vibrant___foreground",
  MetadataPaletteVibrantPopulation = "metadata___palette___vibrant___population",
  MetadataPaletteVibrantTitle = "metadata___palette___vibrant___title",
  MimeType = "mimeType",
  OriginalFilename = "originalFilename",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  Sha1hash = "sha1hash",
  Size = "size",
  SourceKey = "source____key",
  SourceType = "source____type",
  SourceId = "source___id",
  SourceName = "source___name",
  SourceUrl = "source___url",
  Title = "title",
  Url = "url",
}

export type SanityImageAssetFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageAssetGroupConnection = {
  __typename?: "SanityImageAssetGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityImageAssetEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SanityImageAssetGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetGroupConnectionGroupArgs = {
  field: SanityImageAssetFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageCrop = {
  __typename?: "SanityImageCrop";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  bottom?: Maybe<Scalars["Float"]>;
  left?: Maybe<Scalars["Float"]>;
  right?: Maybe<Scalars["Float"]>;
  top?: Maybe<Scalars["Float"]>;
};

export type SanityImageCropFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  bottom?: InputMaybe<FloatQueryOperatorInput>;
  left?: InputMaybe<FloatQueryOperatorInput>;
  right?: InputMaybe<FloatQueryOperatorInput>;
  top?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensions = {
  __typename?: "SanityImageDimensions";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export enum SanityImageFit {
  Clip = "CLIP",
  Crop = "CROP",
  Fill = "FILL",
  Fillmax = "FILLMAX",
  Max = "MAX",
  Min = "MIN",
  Scale = "SCALE",
}

export type SanityImageHotspot = {
  __typename?: "SanityImageHotspot";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
};

export type SanityImageHotspotFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageMetadata = {
  __typename?: "SanityImageMetadata";
  _key?: Maybe<Scalars["String"]>;
  _rawDimensions?: Maybe<Scalars["JSON"]>;
  _rawLocation?: Maybe<Scalars["JSON"]>;
  _rawPalette?: Maybe<Scalars["JSON"]>;
  _type?: Maybe<Scalars["String"]>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars["Boolean"]>;
  isOpaque?: Maybe<Scalars["Boolean"]>;
  location?: Maybe<SanityGeopoint>;
  lqip?: Maybe<Scalars["String"]>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageMetadataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDimensions?: InputMaybe<JsonQueryOperatorInput>;
  _rawLocation?: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<SanityImageDimensionsFilterInput>;
  hasAlpha?: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque?: InputMaybe<BooleanQueryOperatorInput>;
  location?: InputMaybe<SanityGeopointFilterInput>;
  lqip?: InputMaybe<StringQueryOperatorInput>;
  palette?: InputMaybe<SanityImagePaletteFilterInput>;
};

export type SanityImagePalette = {
  __typename?: "SanityImagePalette";
  _key?: Maybe<Scalars["String"]>;
  _rawDarkMuted?: Maybe<Scalars["JSON"]>;
  _rawDarkVibrant?: Maybe<Scalars["JSON"]>;
  _rawDominant?: Maybe<Scalars["JSON"]>;
  _rawLightMuted?: Maybe<Scalars["JSON"]>;
  _rawLightVibrant?: Maybe<Scalars["JSON"]>;
  _rawMuted?: Maybe<Scalars["JSON"]>;
  _rawVibrant?: Maybe<Scalars["JSON"]>;
  _type?: Maybe<Scalars["String"]>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawDarkMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
};

export type SanityImagePaletteSwatch = {
  __typename?: "SanityImagePaletteSwatch";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  foreground?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  foreground?: InputMaybe<StringQueryOperatorInput>;
  population?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityMainImage = {
  __typename?: "SanityMainImage";
  _key?: Maybe<Scalars["String"]>;
  _rawAsset?: Maybe<Scalars["JSON"]>;
  _rawCrop?: Maybe<Scalars["JSON"]>;
  _rawHotspot?: Maybe<Scalars["JSON"]>;
  _type?: Maybe<Scalars["String"]>;
  alt?: Maybe<Scalars["String"]>;
  asset?: Maybe<SanityImageAsset>;
  caption?: Maybe<Scalars["String"]>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type SanityMainImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMainImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMainImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMainImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  alt?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
};

export type SanityPost = Node &
  SanityDocument & {
    __typename?: "SanityPost";
    _createdAt?: Maybe<Scalars["Date"]>;
    _id?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    _rawAuthors?: Maybe<Scalars["JSON"]>;
    _rawBody?: Maybe<Scalars["JSON"]>;
    _rawCategories?: Maybe<Scalars["JSON"]>;
    _rawExcerpt?: Maybe<Scalars["JSON"]>;
    _rawMainImage?: Maybe<Scalars["JSON"]>;
    _rawSlug?: Maybe<Scalars["JSON"]>;
    _rev?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    authors?: Maybe<Array<Maybe<SanityAuthorReference>>>;
    body?: Maybe<Array<Maybe<SanityBlock>>>;
    categories?: Maybe<Array<Maybe<SanityCategory>>>;
    children: Array<Node>;
    excerpt?: Maybe<Array<Maybe<SanityBlock>>>;
    id: Scalars["ID"];
    internal: Internal;
    mainImage?: Maybe<SanityMainImage>;
    parent?: Maybe<Node>;
    publishedAt?: Maybe<Scalars["Date"]>;
    slug?: Maybe<SanitySlug>;
    title?: Maybe<Scalars["String"]>;
  };

export type SanityPost_CreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityPost_RawAuthorsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPost_RawBodyArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPost_RawCategoriesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPost_RawExcerptArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPost_RawMainImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPost_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPost_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityPostPublishedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanityPostConnection = {
  __typename?: "SanityPostConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityPostEdge>;
  group: Array<SanityPostGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostConnectionGroupArgs = {
  field: SanityPostFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityPostConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostEdge = {
  __typename?: "SanityPostEdge";
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export enum SanityPostFieldsEnum {
  CreatedAt = "_createdAt",
  Id = "_id",
  Key = "_key",
  RawAuthors = "_rawAuthors",
  RawBody = "_rawBody",
  RawCategories = "_rawCategories",
  RawExcerpt = "_rawExcerpt",
  RawMainImage = "_rawMainImage",
  RawSlug = "_rawSlug",
  Rev = "_rev",
  Type = "_type",
  UpdatedAt = "_updatedAt",
  Authors = "authors",
  AuthorsKey = "authors____key",
  AuthorsRawAuthor = "authors____rawAuthor",
  AuthorsType = "authors____type",
  AuthorsAuthorCreatedAt = "authors___author____createdAt",
  AuthorsAuthorId = "authors___author____id",
  AuthorsAuthorKey = "authors___author____key",
  AuthorsAuthorRawBio = "authors___author____rawBio",
  AuthorsAuthorRawImage = "authors___author____rawImage",
  AuthorsAuthorRawSlug = "authors___author____rawSlug",
  AuthorsAuthorRev = "authors___author____rev",
  AuthorsAuthorType = "authors___author____type",
  AuthorsAuthorUpdatedAt = "authors___author____updatedAt",
  AuthorsAuthorBio = "authors___author___bio",
  AuthorsAuthorBioKey = "authors___author___bio____key",
  AuthorsAuthorBioRawChildren = "authors___author___bio____rawChildren",
  AuthorsAuthorBioType = "authors___author___bio____type",
  AuthorsAuthorBioChildren = "authors___author___bio___children",
  AuthorsAuthorBioList = "authors___author___bio___list",
  AuthorsAuthorBioStyle = "authors___author___bio___style",
  AuthorsAuthorChildren = "authors___author___children",
  AuthorsAuthorChildrenChildren = "authors___author___children___children",
  AuthorsAuthorChildrenId = "authors___author___children___id",
  AuthorsAuthorId = "authors___author___id",
  AuthorsAuthorImageKey = "authors___author___image____key",
  AuthorsAuthorImageRawAsset = "authors___author___image____rawAsset",
  AuthorsAuthorImageRawCrop = "authors___author___image____rawCrop",
  AuthorsAuthorImageRawHotspot = "authors___author___image____rawHotspot",
  AuthorsAuthorImageType = "authors___author___image____type",
  AuthorsAuthorImageAlt = "authors___author___image___alt",
  AuthorsAuthorImageCaption = "authors___author___image___caption",
  AuthorsAuthorInternalContent = "authors___author___internal___content",
  AuthorsAuthorInternalContentDigest = "authors___author___internal___contentDigest",
  AuthorsAuthorInternalDescription = "authors___author___internal___description",
  AuthorsAuthorInternalFieldOwners = "authors___author___internal___fieldOwners",
  AuthorsAuthorInternalIgnoreType = "authors___author___internal___ignoreType",
  AuthorsAuthorInternalMediaType = "authors___author___internal___mediaType",
  AuthorsAuthorInternalOwner = "authors___author___internal___owner",
  AuthorsAuthorInternalType = "authors___author___internal___type",
  AuthorsAuthorName = "authors___author___name",
  AuthorsAuthorParentChildren = "authors___author___parent___children",
  AuthorsAuthorParentId = "authors___author___parent___id",
  AuthorsAuthorSlugKey = "authors___author___slug____key",
  AuthorsAuthorSlugType = "authors___author___slug____type",
  AuthorsAuthorSlugCurrent = "authors___author___slug___current",
  Body = "body",
  BodyKey = "body____key",
  BodyRawChildren = "body____rawChildren",
  BodyType = "body____type",
  BodyChildren = "body___children",
  BodyChildrenKey = "body___children____key",
  BodyChildrenType = "body___children____type",
  BodyChildrenMarks = "body___children___marks",
  BodyChildrenText = "body___children___text",
  BodyList = "body___list",
  BodyStyle = "body___style",
  Categories = "categories",
  CategoriesCreatedAt = "categories____createdAt",
  CategoriesId = "categories____id",
  CategoriesKey = "categories____key",
  CategoriesRev = "categories____rev",
  CategoriesType = "categories____type",
  CategoriesUpdatedAt = "categories____updatedAt",
  CategoriesChildren = "categories___children",
  CategoriesChildrenChildren = "categories___children___children",
  CategoriesChildrenChildrenChildren = "categories___children___children___children",
  CategoriesChildrenChildrenId = "categories___children___children___id",
  CategoriesChildrenId = "categories___children___id",
  CategoriesChildrenInternalContent = "categories___children___internal___content",
  CategoriesChildrenInternalContentDigest = "categories___children___internal___contentDigest",
  CategoriesChildrenInternalDescription = "categories___children___internal___description",
  CategoriesChildrenInternalFieldOwners = "categories___children___internal___fieldOwners",
  CategoriesChildrenInternalIgnoreType = "categories___children___internal___ignoreType",
  CategoriesChildrenInternalMediaType = "categories___children___internal___mediaType",
  CategoriesChildrenInternalOwner = "categories___children___internal___owner",
  CategoriesChildrenInternalType = "categories___children___internal___type",
  CategoriesChildrenParentChildren = "categories___children___parent___children",
  CategoriesChildrenParentId = "categories___children___parent___id",
  CategoriesDescription = "categories___description",
  CategoriesId = "categories___id",
  CategoriesInternalContent = "categories___internal___content",
  CategoriesInternalContentDigest = "categories___internal___contentDigest",
  CategoriesInternalDescription = "categories___internal___description",
  CategoriesInternalFieldOwners = "categories___internal___fieldOwners",
  CategoriesInternalIgnoreType = "categories___internal___ignoreType",
  CategoriesInternalMediaType = "categories___internal___mediaType",
  CategoriesInternalOwner = "categories___internal___owner",
  CategoriesInternalType = "categories___internal___type",
  CategoriesParentChildren = "categories___parent___children",
  CategoriesParentChildrenChildren = "categories___parent___children___children",
  CategoriesParentChildrenId = "categories___parent___children___id",
  CategoriesParentId = "categories___parent___id",
  CategoriesParentInternalContent = "categories___parent___internal___content",
  CategoriesParentInternalContentDigest = "categories___parent___internal___contentDigest",
  CategoriesParentInternalDescription = "categories___parent___internal___description",
  CategoriesParentInternalFieldOwners = "categories___parent___internal___fieldOwners",
  CategoriesParentInternalIgnoreType = "categories___parent___internal___ignoreType",
  CategoriesParentInternalMediaType = "categories___parent___internal___mediaType",
  CategoriesParentInternalOwner = "categories___parent___internal___owner",
  CategoriesParentInternalType = "categories___parent___internal___type",
  CategoriesParentParentChildren = "categories___parent___parent___children",
  CategoriesParentParentId = "categories___parent___parent___id",
  CategoriesTitle = "categories___title",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Excerpt = "excerpt",
  ExcerptKey = "excerpt____key",
  ExcerptRawChildren = "excerpt____rawChildren",
  ExcerptType = "excerpt____type",
  ExcerptChildren = "excerpt___children",
  ExcerptChildrenKey = "excerpt___children____key",
  ExcerptChildrenType = "excerpt___children____type",
  ExcerptChildrenMarks = "excerpt___children___marks",
  ExcerptChildrenText = "excerpt___children___text",
  ExcerptList = "excerpt___list",
  ExcerptStyle = "excerpt___style",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MainImageKey = "mainImage____key",
  MainImageRawAsset = "mainImage____rawAsset",
  MainImageRawCrop = "mainImage____rawCrop",
  MainImageRawHotspot = "mainImage____rawHotspot",
  MainImageType = "mainImage____type",
  MainImageAlt = "mainImage___alt",
  MainImageAssetCreatedAt = "mainImage___asset____createdAt",
  MainImageAssetId = "mainImage___asset____id",
  MainImageAssetKey = "mainImage___asset____key",
  MainImageAssetRawMetadata = "mainImage___asset____rawMetadata",
  MainImageAssetRawSource = "mainImage___asset____rawSource",
  MainImageAssetRev = "mainImage___asset____rev",
  MainImageAssetType = "mainImage___asset____type",
  MainImageAssetUpdatedAt = "mainImage___asset____updatedAt",
  MainImageAssetAltText = "mainImage___asset___altText",
  MainImageAssetAssetId = "mainImage___asset___assetId",
  MainImageAssetChildren = "mainImage___asset___children",
  MainImageAssetChildrenChildren = "mainImage___asset___children___children",
  MainImageAssetChildrenId = "mainImage___asset___children___id",
  MainImageAssetDescription = "mainImage___asset___description",
  MainImageAssetExtension = "mainImage___asset___extension",
  MainImageAssetGatsbyImageData = "mainImage___asset___gatsbyImageData",
  MainImageAssetId = "mainImage___asset___id",
  MainImageAssetInternalContent = "mainImage___asset___internal___content",
  MainImageAssetInternalContentDigest = "mainImage___asset___internal___contentDigest",
  MainImageAssetInternalDescription = "mainImage___asset___internal___description",
  MainImageAssetInternalFieldOwners = "mainImage___asset___internal___fieldOwners",
  MainImageAssetInternalIgnoreType = "mainImage___asset___internal___ignoreType",
  MainImageAssetInternalMediaType = "mainImage___asset___internal___mediaType",
  MainImageAssetInternalOwner = "mainImage___asset___internal___owner",
  MainImageAssetInternalType = "mainImage___asset___internal___type",
  MainImageAssetLabel = "mainImage___asset___label",
  MainImageAssetMetadataKey = "mainImage___asset___metadata____key",
  MainImageAssetMetadataRawDimensions = "mainImage___asset___metadata____rawDimensions",
  MainImageAssetMetadataRawLocation = "mainImage___asset___metadata____rawLocation",
  MainImageAssetMetadataRawPalette = "mainImage___asset___metadata____rawPalette",
  MainImageAssetMetadataType = "mainImage___asset___metadata____type",
  MainImageAssetMetadataHasAlpha = "mainImage___asset___metadata___hasAlpha",
  MainImageAssetMetadataIsOpaque = "mainImage___asset___metadata___isOpaque",
  MainImageAssetMetadataLqip = "mainImage___asset___metadata___lqip",
  MainImageAssetMimeType = "mainImage___asset___mimeType",
  MainImageAssetOriginalFilename = "mainImage___asset___originalFilename",
  MainImageAssetParentChildren = "mainImage___asset___parent___children",
  MainImageAssetParentId = "mainImage___asset___parent___id",
  MainImageAssetPath = "mainImage___asset___path",
  MainImageAssetSha1hash = "mainImage___asset___sha1hash",
  MainImageAssetSize = "mainImage___asset___size",
  MainImageAssetSourceKey = "mainImage___asset___source____key",
  MainImageAssetSourceType = "mainImage___asset___source____type",
  MainImageAssetSourceId = "mainImage___asset___source___id",
  MainImageAssetSourceName = "mainImage___asset___source___name",
  MainImageAssetSourceUrl = "mainImage___asset___source___url",
  MainImageAssetTitle = "mainImage___asset___title",
  MainImageAssetUrl = "mainImage___asset___url",
  MainImageCaption = "mainImage___caption",
  MainImageCropKey = "mainImage___crop____key",
  MainImageCropType = "mainImage___crop____type",
  MainImageCropBottom = "mainImage___crop___bottom",
  MainImageCropLeft = "mainImage___crop___left",
  MainImageCropRight = "mainImage___crop___right",
  MainImageCropTop = "mainImage___crop___top",
  MainImageHotspotKey = "mainImage___hotspot____key",
  MainImageHotspotType = "mainImage___hotspot____type",
  MainImageHotspotHeight = "mainImage___hotspot___height",
  MainImageHotspotWidth = "mainImage___hotspot___width",
  MainImageHotspotX = "mainImage___hotspot___x",
  MainImageHotspotY = "mainImage___hotspot___y",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PublishedAt = "publishedAt",
  SlugKey = "slug____key",
  SlugType = "slug____type",
  SlugCurrent = "slug___current",
  Title = "title",
}

export type SanityPostFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAuthors?: InputMaybe<JsonQueryOperatorInput>;
  _rawBody?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategories?: InputMaybe<JsonQueryOperatorInput>;
  _rawExcerpt?: InputMaybe<JsonQueryOperatorInput>;
  _rawMainImage?: InputMaybe<JsonQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  authors?: InputMaybe<SanityAuthorReferenceFilterListInput>;
  body?: InputMaybe<SanityBlockFilterListInput>;
  categories?: InputMaybe<SanityCategoryFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<SanityBlockFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mainImage?: InputMaybe<SanityMainImageFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityPostGroupConnection = {
  __typename?: "SanityPostGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanityPostEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SanityPostGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanityPostGroupConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostGroupConnectionGroupArgs = {
  field: SanityPostFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanityPostGroupConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostGroupConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostGroupConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};

export type SanityPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars["Int"];
};

export type SanitySiteSettings = Node &
  SanityDocument & {
    __typename?: "SanitySiteSettings";
    _createdAt?: Maybe<Scalars["Date"]>;
    _id?: Maybe<Scalars["String"]>;
    _key?: Maybe<Scalars["String"]>;
    _rawAuthor?: Maybe<Scalars["JSON"]>;
    _rev?: Maybe<Scalars["String"]>;
    _type?: Maybe<Scalars["String"]>;
    _updatedAt?: Maybe<Scalars["Date"]>;
    author?: Maybe<SanityAuthor>;
    children: Array<Node>;
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    internal: Internal;
    keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
    parent?: Maybe<Node>;
    title?: Maybe<Scalars["String"]>;
  };

export type SanitySiteSettings_CreatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanitySiteSettings_RawAuthorArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySiteSettings_UpdatedAtArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SanitySiteSettingsConnection = {
  __typename?: "SanitySiteSettingsConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanitySiteSettingsEdge>;
  group: Array<SanitySiteSettingsGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanitySiteSettings>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanitySiteSettingsConnectionDistinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsConnectionGroupArgs = {
  field: SanitySiteSettingsFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanitySiteSettingsConnectionMaxArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsConnectionMinArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsConnectionSumArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsEdge = {
  __typename?: "SanitySiteSettingsEdge";
  next?: Maybe<SanitySiteSettings>;
  node: SanitySiteSettings;
  previous?: Maybe<SanitySiteSettings>;
};

export enum SanitySiteSettingsFieldsEnum {
  CreatedAt = "_createdAt",
  Id = "_id",
  Key = "_key",
  RawAuthor = "_rawAuthor",
  Rev = "_rev",
  Type = "_type",
  UpdatedAt = "_updatedAt",
  AuthorCreatedAt = "author____createdAt",
  AuthorId = "author____id",
  AuthorKey = "author____key",
  AuthorRawBio = "author____rawBio",
  AuthorRawImage = "author____rawImage",
  AuthorRawSlug = "author____rawSlug",
  AuthorRev = "author____rev",
  AuthorType = "author____type",
  AuthorUpdatedAt = "author____updatedAt",
  AuthorBio = "author___bio",
  AuthorBioKey = "author___bio____key",
  AuthorBioRawChildren = "author___bio____rawChildren",
  AuthorBioType = "author___bio____type",
  AuthorBioChildren = "author___bio___children",
  AuthorBioChildrenKey = "author___bio___children____key",
  AuthorBioChildrenType = "author___bio___children____type",
  AuthorBioChildrenMarks = "author___bio___children___marks",
  AuthorBioChildrenText = "author___bio___children___text",
  AuthorBioList = "author___bio___list",
  AuthorBioStyle = "author___bio___style",
  AuthorChildren = "author___children",
  AuthorChildrenChildren = "author___children___children",
  AuthorChildrenChildrenChildren = "author___children___children___children",
  AuthorChildrenChildrenId = "author___children___children___id",
  AuthorChildrenId = "author___children___id",
  AuthorChildrenInternalContent = "author___children___internal___content",
  AuthorChildrenInternalContentDigest = "author___children___internal___contentDigest",
  AuthorChildrenInternalDescription = "author___children___internal___description",
  AuthorChildrenInternalFieldOwners = "author___children___internal___fieldOwners",
  AuthorChildrenInternalIgnoreType = "author___children___internal___ignoreType",
  AuthorChildrenInternalMediaType = "author___children___internal___mediaType",
  AuthorChildrenInternalOwner = "author___children___internal___owner",
  AuthorChildrenInternalType = "author___children___internal___type",
  AuthorChildrenParentChildren = "author___children___parent___children",
  AuthorChildrenParentId = "author___children___parent___id",
  AuthorId = "author___id",
  AuthorImageKey = "author___image____key",
  AuthorImageRawAsset = "author___image____rawAsset",
  AuthorImageRawCrop = "author___image____rawCrop",
  AuthorImageRawHotspot = "author___image____rawHotspot",
  AuthorImageType = "author___image____type",
  AuthorImageAlt = "author___image___alt",
  AuthorImageAssetCreatedAt = "author___image___asset____createdAt",
  AuthorImageAssetId = "author___image___asset____id",
  AuthorImageAssetKey = "author___image___asset____key",
  AuthorImageAssetRawMetadata = "author___image___asset____rawMetadata",
  AuthorImageAssetRawSource = "author___image___asset____rawSource",
  AuthorImageAssetRev = "author___image___asset____rev",
  AuthorImageAssetType = "author___image___asset____type",
  AuthorImageAssetUpdatedAt = "author___image___asset____updatedAt",
  AuthorImageAssetAltText = "author___image___asset___altText",
  AuthorImageAssetAssetId = "author___image___asset___assetId",
  AuthorImageAssetChildren = "author___image___asset___children",
  AuthorImageAssetDescription = "author___image___asset___description",
  AuthorImageAssetExtension = "author___image___asset___extension",
  AuthorImageAssetGatsbyImageData = "author___image___asset___gatsbyImageData",
  AuthorImageAssetId = "author___image___asset___id",
  AuthorImageAssetLabel = "author___image___asset___label",
  AuthorImageAssetMimeType = "author___image___asset___mimeType",
  AuthorImageAssetOriginalFilename = "author___image___asset___originalFilename",
  AuthorImageAssetPath = "author___image___asset___path",
  AuthorImageAssetSha1hash = "author___image___asset___sha1hash",
  AuthorImageAssetSize = "author___image___asset___size",
  AuthorImageAssetTitle = "author___image___asset___title",
  AuthorImageAssetUrl = "author___image___asset___url",
  AuthorImageCaption = "author___image___caption",
  AuthorImageCropKey = "author___image___crop____key",
  AuthorImageCropType = "author___image___crop____type",
  AuthorImageCropBottom = "author___image___crop___bottom",
  AuthorImageCropLeft = "author___image___crop___left",
  AuthorImageCropRight = "author___image___crop___right",
  AuthorImageCropTop = "author___image___crop___top",
  AuthorImageHotspotKey = "author___image___hotspot____key",
  AuthorImageHotspotType = "author___image___hotspot____type",
  AuthorImageHotspotHeight = "author___image___hotspot___height",
  AuthorImageHotspotWidth = "author___image___hotspot___width",
  AuthorImageHotspotX = "author___image___hotspot___x",
  AuthorImageHotspotY = "author___image___hotspot___y",
  AuthorInternalContent = "author___internal___content",
  AuthorInternalContentDigest = "author___internal___contentDigest",
  AuthorInternalDescription = "author___internal___description",
  AuthorInternalFieldOwners = "author___internal___fieldOwners",
  AuthorInternalIgnoreType = "author___internal___ignoreType",
  AuthorInternalMediaType = "author___internal___mediaType",
  AuthorInternalOwner = "author___internal___owner",
  AuthorInternalType = "author___internal___type",
  AuthorName = "author___name",
  AuthorParentChildren = "author___parent___children",
  AuthorParentChildrenChildren = "author___parent___children___children",
  AuthorParentChildrenId = "author___parent___children___id",
  AuthorParentId = "author___parent___id",
  AuthorParentInternalContent = "author___parent___internal___content",
  AuthorParentInternalContentDigest = "author___parent___internal___contentDigest",
  AuthorParentInternalDescription = "author___parent___internal___description",
  AuthorParentInternalFieldOwners = "author___parent___internal___fieldOwners",
  AuthorParentInternalIgnoreType = "author___parent___internal___ignoreType",
  AuthorParentInternalMediaType = "author___parent___internal___mediaType",
  AuthorParentInternalOwner = "author___parent___internal___owner",
  AuthorParentInternalType = "author___parent___internal___type",
  AuthorParentParentChildren = "author___parent___parent___children",
  AuthorParentParentId = "author___parent___parent___id",
  AuthorSlugKey = "author___slug____key",
  AuthorSlugType = "author___slug____type",
  AuthorSlugCurrent = "author___slug___current",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Keywords = "keywords",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Title = "title",
}

export type SanitySiteSettingsFilterInput = {
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _id?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  _rawAuthor?: InputMaybe<JsonQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  author?: InputMaybe<SanityAuthorFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySiteSettingsGroupConnection = {
  __typename?: "SanitySiteSettingsGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SanitySiteSettingsEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SanitySiteSettingsGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SanitySiteSettings>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SanitySiteSettingsGroupConnectionDistinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsGroupConnectionGroupArgs = {
  field: SanitySiteSettingsFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SanitySiteSettingsGroupConnectionMaxArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsGroupConnectionMinArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsGroupConnectionSumArgs = {
  field: SanitySiteSettingsFieldsEnum;
};

export type SanitySiteSettingsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySiteSettingsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySlug = {
  __typename?: "SanitySlug";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  current?: Maybe<Scalars["String"]>;
};

export type SanitySlugFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  current?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySpan = {
  __typename?: "SanitySpan";
  _key?: Maybe<Scalars["String"]>;
  _type?: Maybe<Scalars["String"]>;
  marks?: Maybe<Array<Maybe<Scalars["String"]>>>;
  text?: Maybe<Scalars["String"]>;
};

export type SanitySpanFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  marks?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: InputMaybe<SanitySpanFilterInput>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  host?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  port?: Maybe<Scalars["Int"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Host = "host",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  JsxRuntime = "jsxRuntime",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  Port = "port",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataTitle = "siteMetadata___title",
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: "SiteFunction";
  absoluteCompiledFilePath: Scalars["String"];
  children: Array<Node>;
  functionRoute: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  matchPath?: Maybe<Scalars["String"]>;
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  parent?: Maybe<Node>;
  pluginName: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge";
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FunctionRoute = "functionRoute",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
  OriginalRelativeFilePath = "originalRelativeFilePath",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginName = "pluginName",
  RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  children: Array<Node>;
  component: Scalars["String"];
  componentChunkName: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  internalComponentName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  pageContext?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  path: Scalars["String"];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  Id = "id",
  InternalComponentName = "internalComponentName",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  PageContext = "pageContext",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorPackageJson = "pluginCreator___packageJson",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  packageJson?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<Scalars["JSON"]>;
  resolve?: Maybe<Scalars["String"]>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = "browserAPIs",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NodeApIs = "nodeAPIs",
  PackageJson = "packageJson",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginFilepath = "pluginFilepath",
  PluginOptions = "pluginOptions",
  Resolve = "resolve",
  SsrApIs = "ssrAPIs",
  Version = "version",
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  description?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars["String"]>;
  glob?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ne?: InputMaybe<Scalars["String"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  regex?: InputMaybe<Scalars["String"]>;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = {
  __typename?: "Query";
  allSiteFunction: {
    __typename?: "SiteFunctionConnection";
    nodes: Array<{ __typename?: "SiteFunction"; functionRoute: string }>;
  };
  allSitePage: { __typename?: "SitePageConnection"; nodes: Array<{ __typename?: "SitePage"; path: string }> };
};

export type DefaultSeoQueryQueryVariables = Exact<{ [key: string]: never }>;

export type DefaultSeoQueryQuery = {
  __typename?: "Query";
  site?:
    | {
        __typename?: "SanitySiteSettings";
        title?: string | null | undefined;
        description?: string | null | undefined;
        keywords?: Array<string | null | undefined> | null | undefined;
        author?: { __typename?: "SanityAuthor"; name?: string | null | undefined } | null | undefined;
      }
    | null
    | undefined;
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SiteTitleQueryQuery = {
  __typename?: "Query";
  site?: { __typename?: "SanitySiteSettings"; title?: string | null | undefined } | null | undefined;
};

export type ArchivePageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type ArchivePageQueryQuery = {
  __typename?: "Query";
  posts: {
    __typename?: "SanityPostConnection";
    edges: Array<{
      __typename?: "SanityPostEdge";
      node: {
        __typename?: "SanityPost";
        id: string;
        publishedAt?: any | null | undefined;
        title?: string | null | undefined;
        _rawExcerpt?: any | null | undefined;
        mainImage?:
          | {
              __typename?: "SanityMainImage";
              alt?: string | null | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    _key?: string | null | undefined;
                    _type?: string | null | undefined;
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    _key?: string | null | undefined;
                    _type?: string | null | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                  }
                | null
                | undefined;
              asset?: { __typename?: "SanityImageAsset"; _id?: string | null | undefined } | null | undefined;
            }
          | null
          | undefined;
        slug?: { __typename?: "SanitySlug"; current?: string | null | undefined } | null | undefined;
      };
    }>;
  };
};

export type SanityImageFragment = {
  __typename?: "SanityMainImage";
  crop?:
    | {
        __typename?: "SanityImageCrop";
        _key?: string | null | undefined;
        _type?: string | null | undefined;
        top?: number | null | undefined;
        bottom?: number | null | undefined;
        left?: number | null | undefined;
        right?: number | null | undefined;
      }
    | null
    | undefined;
  hotspot?:
    | {
        __typename?: "SanityImageHotspot";
        _key?: string | null | undefined;
        _type?: string | null | undefined;
        x?: number | null | undefined;
        y?: number | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
      }
    | null
    | undefined;
  asset?: { __typename?: "SanityImageAsset"; _id?: string | null | undefined } | null | undefined;
};

export type IndexPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type IndexPageQueryQuery = {
  __typename?: "Query";
  site?:
    | {
        __typename?: "SanitySiteSettings";
        title?: string | null | undefined;
        description?: string | null | undefined;
        keywords?: Array<string | null | undefined> | null | undefined;
      }
    | null
    | undefined;
  posts: {
    __typename?: "SanityPostConnection";
    edges: Array<{
      __typename?: "SanityPostEdge";
      node: {
        __typename?: "SanityPost";
        id: string;
        publishedAt?: any | null | undefined;
        title?: string | null | undefined;
        _rawExcerpt?: any | null | undefined;
        mainImage?:
          | {
              __typename?: "SanityMainImage";
              alt?: string | null | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    _key?: string | null | undefined;
                    _type?: string | null | undefined;
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    _key?: string | null | undefined;
                    _type?: string | null | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                  }
                | null
                | undefined;
              asset?: { __typename?: "SanityImageAsset"; _id?: string | null | undefined } | null | undefined;
            }
          | null
          | undefined;
        slug?: { __typename?: "SanitySlug"; current?: string | null | undefined } | null | undefined;
      };
    }>;
  };
};

export type BlogPostTemplateQueryQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type BlogPostTemplateQueryQuery = {
  __typename?: "Query";
  post?:
    | {
        __typename?: "SanityPost";
        id: string;
        publishedAt?: any | null | undefined;
        title?: string | null | undefined;
        _rawExcerpt?: any | null | undefined;
        _rawBody?: any | null | undefined;
        categories?:
          | Array<
              | { __typename?: "SanityCategory"; _id?: string | null | undefined; title?: string | null | undefined }
              | null
              | undefined
            >
          | null
          | undefined;
        mainImage?:
          | {
              __typename?: "SanityMainImage";
              alt?: string | null | undefined;
              crop?:
                | {
                    __typename?: "SanityImageCrop";
                    _key?: string | null | undefined;
                    _type?: string | null | undefined;
                    top?: number | null | undefined;
                    bottom?: number | null | undefined;
                    left?: number | null | undefined;
                    right?: number | null | undefined;
                  }
                | null
                | undefined;
              hotspot?:
                | {
                    __typename?: "SanityImageHotspot";
                    _key?: string | null | undefined;
                    _type?: string | null | undefined;
                    x?: number | null | undefined;
                    y?: number | null | undefined;
                    height?: number | null | undefined;
                    width?: number | null | undefined;
                  }
                | null
                | undefined;
              asset?: { __typename?: "SanityImageAsset"; _id?: string | null | undefined } | null | undefined;
            }
          | null
          | undefined;
        slug?: { __typename?: "SanitySlug"; current?: string | null | undefined } | null | undefined;
        authors?:
          | Array<
              | {
                  __typename?: "SanityAuthorReference";
                  _key?: string | null | undefined;
                  author?:
                    | {
                        __typename?: "SanityAuthor";
                        name?: string | null | undefined;
                        image?:
                          | {
                              __typename?: "SanityMainImage";
                              crop?:
                                | {
                                    __typename?: "SanityImageCrop";
                                    _key?: string | null | undefined;
                                    _type?: string | null | undefined;
                                    top?: number | null | undefined;
                                    bottom?: number | null | undefined;
                                    left?: number | null | undefined;
                                    right?: number | null | undefined;
                                  }
                                | null
                                | undefined;
                              hotspot?:
                                | {
                                    __typename?: "SanityImageHotspot";
                                    _key?: string | null | undefined;
                                    _type?: string | null | undefined;
                                    x?: number | null | undefined;
                                    y?: number | null | undefined;
                                    height?: number | null | undefined;
                                    width?: number | null | undefined;
                                  }
                                | null
                                | undefined;
                              asset?:
                                | { __typename?: "SanityImageAsset"; _id?: string | null | undefined }
                                | null
                                | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
};
