/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type { PrismaContext } from './../context/index'
import type { User, File, ResetPassword, Token } from '@prisma/client'
import type { core } from 'nexus'
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * desc
     */
    upload<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void // "Upload";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>
    ): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * desc
     */
    upload<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void // "Upload";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoolFilter: {
    // input type
    equals?: boolean | null // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null // NestedBoolFilter
  }
  DateTimeFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  DateTimeNullableFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  EnumLetterStatusFilter: {
    // input type
    equals?: NexusGenEnums['LetterStatus'] | null // LetterStatus
    in?: NexusGenEnums['LetterStatus'][] | null // [LetterStatus!]
    not?: NexusGenInputs['NestedEnumLetterStatusFilter'] | null // NestedEnumLetterStatusFilter
    notIn?: NexusGenEnums['LetterStatus'][] | null // [LetterStatus!]
  }
  FileListRelationFilter: {
    // input type
    every?: NexusGenInputs['FileWhereInput'] | null // FileWhereInput
    none?: NexusGenInputs['FileWhereInput'] | null // FileWhereInput
    some?: NexusGenInputs['FileWhereInput'] | null // FileWhereInput
  }
  FileOrderByInput: {
    // input type
    createdAt?: NexusGenEnums['SortOrder'] | null // SortOrder
    createdById?: NexusGenEnums['SortOrder'] | null // SortOrder
    encoding?: NexusGenEnums['SortOrder'] | null // SortOrder
    filename?: NexusGenEnums['SortOrder'] | null // SortOrder
    id?: NexusGenEnums['SortOrder'] | null // SortOrder
    mimetype?: NexusGenEnums['SortOrder'] | null // SortOrder
    name?: NexusGenEnums['SortOrder'] | null // SortOrder
    path?: NexusGenEnums['SortOrder'] | null // SortOrder
    rank?: NexusGenEnums['SortOrder'] | null // SortOrder
    size?: NexusGenEnums['SortOrder'] | null // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null // SortOrder
  }
  FileWhereInput: {
    // input type
    AND?: NexusGenInputs['FileWhereInput'][] | null // [FileWhereInput!]
    CreatedBy?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    NOT?: NexusGenInputs['FileWhereInput'][] | null // [FileWhereInput!]
    OR?: NexusGenInputs['FileWhereInput'][] | null // [FileWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    createdById?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    encoding?: NexusGenInputs['StringFilter'] | null // StringFilter
    filename?: NexusGenInputs['StringFilter'] | null // StringFilter
    id?: NexusGenInputs['StringFilter'] | null // StringFilter
    mimetype?: NexusGenInputs['StringFilter'] | null // StringFilter
    name?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    path?: NexusGenInputs['StringFilter'] | null // StringFilter
    rank?: NexusGenInputs['IntFilter'] | null // IntFilter
    size?: NexusGenInputs['FloatFilter'] | null // FloatFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
  }
  FileWhereUniqueInput: {
    // input type
    id?: string | null // String
  }
  FloatFilter: {
    // input type
    equals?: number | null // Float
    gt?: number | null // Float
    gte?: number | null // Float
    in?: number[] | null // [Float!]
    lt?: number | null // Float
    lte?: number | null // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null // NestedFloatFilter
    notIn?: number[] | null // [Float!]
  }
  IntFilter: {
    // input type
    equals?: number | null // Int
    gt?: number | null // Int
    gte?: number | null // Int
    in?: number[] | null // [Int!]
    lt?: number | null // Int
    lte?: number | null // Int
    not?: NexusGenInputs['NestedIntFilter'] | null // NestedIntFilter
    notIn?: number[] | null // [Int!]
  }
  IntNullableFilter: {
    // input type
    equals?: number | null // Int
    gt?: number | null // Int
    gte?: number | null // Int
    in?: number[] | null // [Int!]
    lt?: number | null // Int
    lte?: number | null // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null // NestedIntNullableFilter
    notIn?: number[] | null // [Int!]
  }
  LetterListRelationFilter: {
    // input type
    every?: NexusGenInputs['LetterWhereInput'] | null // LetterWhereInput
    none?: NexusGenInputs['LetterWhereInput'] | null // LetterWhereInput
    some?: NexusGenInputs['LetterWhereInput'] | null // LetterWhereInput
  }
  LetterWhereInput: {
    // input type
    AND?: NexusGenInputs['LetterWhereInput'][] | null // [LetterWhereInput!]
    CreatedBy?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    NOT?: NexusGenInputs['LetterWhereInput'][] | null // [LetterWhereInput!]
    OR?: NexusGenInputs['LetterWhereInput'][] | null // [LetterWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    createdById?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    deleteOnSend?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    email?: NexusGenInputs['StringFilter'] | null // StringFilter
    errorMessage?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    id?: NexusGenInputs['StringFilter'] | null // StringFilter
    message?: NexusGenInputs['StringFilter'] | null // StringFilter
    rank?: NexusGenInputs['IntNullableFilter'] | null // IntNullableFilter
    replyTo?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    returnTo?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    status?: NexusGenInputs['EnumLetterStatusFilter'] | null // EnumLetterStatusFilter
    subject?: NexusGenInputs['StringFilter'] | null // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
  }
  NestedBoolFilter: {
    // input type
    equals?: boolean | null // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null // NestedBoolFilter
  }
  NestedDateTimeFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  NestedDateTimeNullableFilter: {
    // input type
    equals?: NexusGenScalars['DateTime'] | null // DateTime
    gt?: NexusGenScalars['DateTime'] | null // DateTime
    gte?: NexusGenScalars['DateTime'] | null // DateTime
    in?: NexusGenScalars['DateTime'][] | null // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null // DateTime
    lte?: NexusGenScalars['DateTime'] | null // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null // [DateTime!]
  }
  NestedEnumLetterStatusFilter: {
    // input type
    equals?: NexusGenEnums['LetterStatus'] | null // LetterStatus
    in?: NexusGenEnums['LetterStatus'][] | null // [LetterStatus!]
    not?: NexusGenInputs['NestedEnumLetterStatusFilter'] | null // NestedEnumLetterStatusFilter
    notIn?: NexusGenEnums['LetterStatus'][] | null // [LetterStatus!]
  }
  NestedFloatFilter: {
    // input type
    equals?: number | null // Float
    gt?: number | null // Float
    gte?: number | null // Float
    in?: number[] | null // [Float!]
    lt?: number | null // Float
    lte?: number | null // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null // NestedFloatFilter
    notIn?: number[] | null // [Float!]
  }
  NestedIntFilter: {
    // input type
    equals?: number | null // Int
    gt?: number | null // Int
    gte?: number | null // Int
    in?: number[] | null // [Int!]
    lt?: number | null // Int
    lte?: number | null // Int
    not?: NexusGenInputs['NestedIntFilter'] | null // NestedIntFilter
    notIn?: number[] | null // [Int!]
  }
  NestedIntNullableFilter: {
    // input type
    equals?: number | null // Int
    gt?: number | null // Int
    gte?: number | null // Int
    in?: number[] | null // [Int!]
    lt?: number | null // Int
    lte?: number | null // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null // NestedIntNullableFilter
    notIn?: number[] | null // [Int!]
  }
  NestedStringFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringFilter'] | null // NestedStringFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  NestedStringNullableFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null // NestedStringNullableFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  ResetPasswordListRelationFilter: {
    // input type
    every?: NexusGenInputs['ResetPasswordWhereInput'] | null // ResetPasswordWhereInput
    none?: NexusGenInputs['ResetPasswordWhereInput'] | null // ResetPasswordWhereInput
    some?: NexusGenInputs['ResetPasswordWhereInput'] | null // ResetPasswordWhereInput
  }
  ResetPasswordProcessorWhereInput: {
    // input type
    User: NexusGenInputs['UserWhereUniqueInput'] // UserWhereUniqueInput!
    code: string // ID!
  }
  ResetPasswordWhereInput: {
    // input type
    AND?: NexusGenInputs['ResetPasswordWhereInput'][] | null // [ResetPasswordWhereInput!]
    NOT?: NexusGenInputs['ResetPasswordWhereInput'][] | null // [ResetPasswordWhereInput!]
    OR?: NexusGenInputs['ResetPasswordWhereInput'][] | null // [ResetPasswordWhereInput!]
    User?: NexusGenInputs['StringFilter'] | null // StringFilter
    User_ResetPasswordToUser?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    code?: NexusGenInputs['StringFilter'] | null // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null // StringFilter
    password?: NexusGenInputs['StringFilter'] | null // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    validTill?: NexusGenInputs['DateTimeNullableFilter'] | null // DateTimeNullableFilter
  }
  ResetPasswordWhereUniqueInput: {
    // input type
    id?: string | null // ID
  }
  SingleUploadInput: {
    // input type
    directory?: string | null // String
    file: NexusGenScalars['Upload'] // Upload!
    name?: string | null // String
  }
  StringFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringFilter'] | null // NestedStringFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  StringNullableFilter: {
    // input type
    contains?: string | null // String
    endsWith?: string | null // String
    equals?: string | null // String
    gt?: string | null // String
    gte?: string | null // String
    in?: string[] | null // [String!]
    lt?: string | null // String
    lte?: string | null // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null // NestedStringNullableFilter
    notIn?: string[] | null // [String!]
    startsWith?: string | null // String
  }
  TokenListRelationFilter: {
    // input type
    every?: NexusGenInputs['TokenWhereInput'] | null // TokenWhereInput
    none?: NexusGenInputs['TokenWhereInput'] | null // TokenWhereInput
    some?: NexusGenInputs['TokenWhereInput'] | null // TokenWhereInput
  }
  TokenOrderByInput: {
    // input type
    createdAt?: NexusGenEnums['SortOrder'] | null // SortOrder
    expiredAt?: NexusGenEnums['SortOrder'] | null // SortOrder
    id?: NexusGenEnums['SortOrder'] | null // SortOrder
    userId?: NexusGenEnums['SortOrder'] | null // SortOrder
  }
  TokenWhereInput: {
    // input type
    AND?: NexusGenInputs['TokenWhereInput'][] | null // [TokenWhereInput!]
    NOT?: NexusGenInputs['TokenWhereInput'][] | null // [TokenWhereInput!]
    OR?: NexusGenInputs['TokenWhereInput'][] | null // [TokenWhereInput!]
    User?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    createdAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    expiredAt?: NexusGenInputs['DateTimeNullableFilter'] | null // DateTimeNullableFilter
    id?: NexusGenInputs['StringFilter'] | null // StringFilter
    userId?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
  }
  TokenWhereUniqueInput: {
    // input type
    id?: string | null // String
  }
  UserOrderByInput: {
    // input type
    active?: NexusGenEnums['SortOrder'] | null // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null // SortOrder
    email?: NexusGenEnums['SortOrder'] | null // SortOrder
    fullname?: NexusGenEnums['SortOrder'] | null // SortOrder
    id?: NexusGenEnums['SortOrder'] | null // SortOrder
    image?: NexusGenEnums['SortOrder'] | null // SortOrder
    password?: NexusGenEnums['SortOrder'] | null // SortOrder
    showEmail?: NexusGenEnums['SortOrder'] | null // SortOrder
    showFullname?: NexusGenEnums['SortOrder'] | null // SortOrder
    sudo?: NexusGenEnums['SortOrder'] | null // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null // SortOrder
    username?: NexusGenEnums['SortOrder'] | null // SortOrder
  }
  UserSigninDataInput: {
    // input type
    password?: string | null // String
  }
  UserSignupDataInput: {
    // input type
    email?: string | null // String
    fullname?: string | null // String
    password?: string | null // String
    showEmail: boolean // Boolean!
    showFullname: boolean // Boolean!
    username?: string | null // String
  }
  UserWhereInput: {
    // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    Files?: NexusGenInputs['FileListRelationFilter'] | null // FileListRelationFilter
    Letters?: NexusGenInputs['LetterListRelationFilter'] | null // LetterListRelationFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null // [UserWhereInput!]
    ResetPasswords?: NexusGenInputs['ResetPasswordListRelationFilter'] | null // ResetPasswordListRelationFilter
    Tokens?: NexusGenInputs['TokenListRelationFilter'] | null // TokenListRelationFilter
    active?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    email?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    fullname?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    id?: NexusGenInputs['StringFilter'] | null // StringFilter
    image?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    password?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
    showEmail?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    showFullname?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    sudo?: NexusGenInputs['BoolFilter'] | null // BoolFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null // DateTimeFilter
    username?: NexusGenInputs['StringNullableFilter'] | null // StringNullableFilter
  }
  UserWhereUniqueInput: {
    // input type
    email?: string | null // String
    id?: string | null // String
    username?: string | null // String
  }
}

export interface NexusGenEnums {
  LetterStatus: 'Created' | 'Error' | 'Processing' | 'Sended'
  SortOrder: 'asc' | 'desc'
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: Date
  JSON: any
  Upload: any
}

export interface NexusGenObjects {
  AuthPayload: {
    // root type
    data?: NexusGenRootTypes['User'] | null // User
    errors: NexusGenRootTypes['RequestError'][] // [RequestError!]!
    message?: string | null // String
    success: boolean // Boolean!
    token?: string | null // String
  }
  File: File
  Mutation: {}
  Query: {}
  RequestError: {
    // root type
    key: string // String!
    message: string // String!
  }
  ResetPassword: ResetPassword
  ResetPasswordResponse: {
    // root type
    data?: NexusGenRootTypes['ResetPassword'] | null // ResetPassword
    errors: NexusGenRootTypes['RequestError'][] // [RequestError!]!
    message: string // String!
    success: boolean // Boolean!
  }
  Token: Token
  User: User
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes &
  NexusGenScalars &
  NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: {
    // field return type
    data: NexusGenRootTypes['User'] | null // User
    errors: NexusGenRootTypes['RequestError'][] // [RequestError!]!
    message: string | null // String
    success: boolean // Boolean!
    token: string | null // String
  }
  File: {
    // field return type
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    encoding: string // String!
    filename: string // String!
    id: string // String!
    mimetype: string // String!
    name: string | null // String
    path: string // String!
    rank: number // Int!
    size: number // Float!
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
  }
  Mutation: {
    // field return type
    createResetPasswordProcessor: NexusGenRootTypes['ResetPasswordResponse'] // ResetPasswordResponse!
    resetPasswordProcessor: NexusGenRootTypes['AuthPayload'] // AuthPayload!
    signin: NexusGenRootTypes['AuthPayload'] // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload'] // AuthPayload!
    singleUpload: NexusGenRootTypes['File'] | null // File
  }
  Query: {
    // field return type
    file: NexusGenRootTypes['File'] | null // File
    files: NexusGenRootTypes['File'][] // [File!]!
    filesCount: number // Int!
    me: NexusGenRootTypes['User'] | null // User
    tokens: NexusGenRootTypes['Token'][] // [Token!]!
    user: NexusGenRootTypes['User'] | null // User
    users: NexusGenRootTypes['User'][] // [User!]!
    usersCount: number // Int!
  }
  RequestError: {
    // field return type
    key: string // String!
    message: string // String!
  }
  ResetPassword: {
    // field return type
    foo: string | null // String
    id: string // ID!
  }
  ResetPasswordResponse: {
    // field return type
    data: NexusGenRootTypes['ResetPassword'] | null // ResetPassword
    errors: NexusGenRootTypes['RequestError'][] // [RequestError!]!
    message: string // String!
    success: boolean // Boolean!
  }
  Token: {
    // field return type
    User: NexusGenRootTypes['User'] | null // User
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    expiredAt: NexusGenScalars['DateTime'] | null // DateTime
    id: string // ID!
    userId: string | null // String
  }
  User: {
    // field return type
    Tokens: Array<NexusGenRootTypes['Token'] | null> | null // [Token]
    createdAt: NexusGenScalars['DateTime'] // DateTime!
    email: string | null // String
    fullname: string | null // String
    id: string // String!
    image: string | null // String
    showEmail: boolean // Boolean!
    showFullname: boolean // Boolean!
    sudo: boolean | null // Boolean
    updatedAt: NexusGenScalars['DateTime'] // DateTime!
    username: string | null // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: {
    // field return type name
    data: 'User'
    errors: 'RequestError'
    message: 'String'
    success: 'Boolean'
    token: 'String'
  }
  File: {
    // field return type name
    createdAt: 'DateTime'
    encoding: 'String'
    filename: 'String'
    id: 'String'
    mimetype: 'String'
    name: 'String'
    path: 'String'
    rank: 'Int'
    size: 'Float'
    updatedAt: 'DateTime'
  }
  Mutation: {
    // field return type name
    createResetPasswordProcessor: 'ResetPasswordResponse'
    resetPasswordProcessor: 'AuthPayload'
    signin: 'AuthPayload'
    signup: 'AuthPayload'
    singleUpload: 'File'
  }
  Query: {
    // field return type name
    file: 'File'
    files: 'File'
    filesCount: 'Int'
    me: 'User'
    tokens: 'Token'
    user: 'User'
    users: 'User'
    usersCount: 'Int'
  }
  RequestError: {
    // field return type name
    key: 'String'
    message: 'String'
  }
  ResetPassword: {
    // field return type name
    foo: 'String'
    id: 'ID'
  }
  ResetPasswordResponse: {
    // field return type name
    data: 'ResetPassword'
    errors: 'RequestError'
    message: 'String'
    success: 'Boolean'
  }
  Token: {
    // field return type name
    User: 'User'
    createdAt: 'DateTime'
    expiredAt: 'DateTime'
    id: 'ID'
    userId: 'String'
  }
  User: {
    // field return type name
    Tokens: 'Token'
    createdAt: 'DateTime'
    email: 'String'
    fullname: 'String'
    id: 'String'
    image: 'String'
    showEmail: 'Boolean'
    showFullname: 'Boolean'
    sudo: 'Boolean'
    updatedAt: 'DateTime'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createResetPasswordProcessor: {
      // args
      where: NexusGenInputs['UserWhereUniqueInput'] // UserWhereUniqueInput!
    }
    resetPasswordProcessor: {
      // args
      where: NexusGenInputs['ResetPasswordProcessorWhereInput'] // ResetPasswordProcessorWhereInput!
    }
    signin: {
      // args
      data: NexusGenInputs['UserSigninDataInput'] // UserSigninDataInput!
      where: NexusGenInputs['UserWhereUniqueInput'] // UserWhereUniqueInput!
    }
    signup: {
      // args
      data: NexusGenInputs['UserSignupDataInput'] // UserSignupDataInput!
    }
    singleUpload: {
      // args
      data?: NexusGenInputs['SingleUploadInput'] | null // SingleUploadInput
      file?: NexusGenScalars['Upload'] | null // Upload
    }
  }
  Query: {
    file: {
      // args
      where: NexusGenInputs['FileWhereUniqueInput'] // FileWhereUniqueInput!
    }
    files: {
      // args
      cursor?: NexusGenInputs['FileWhereUniqueInput'] | null // FileWhereUniqueInput
      orderBy?: NexusGenInputs['FileOrderByInput'][] | null // [FileOrderByInput!]
      skip?: number | null // Int
      take?: number | null // Int
      where?: NexusGenInputs['FileWhereInput'] | null // FileWhereInput
    }
    filesCount: {
      // args
      where?: NexusGenInputs['FileWhereInput'] | null // FileWhereInput
    }
    tokens: {
      // args
      cursor?: NexusGenInputs['TokenWhereUniqueInput'] | null // TokenWhereUniqueInput
      orderBy?: NexusGenInputs['TokenOrderByInput'][] | null // [TokenOrderByInput!]
      skip?: number | null // Int
      take?: number | null // Int
      where?: NexusGenInputs['TokenWhereInput'] | null // TokenWhereInput
    }
    user: {
      // args
      where: NexusGenInputs['UserWhereUniqueInput'] // UserWhereUniqueInput!
    }
    users: {
      // args
      cursor?: NexusGenInputs['UserWhereUniqueInput'] | null // UserWhereUniqueInput
      orderBy?: NexusGenInputs['UserOrderByInput'][] | null // [UserOrderByInput!]
      skip?: number | null // Int
      take?: number | null // Int
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
    usersCount: {
      // args
      where?: NexusGenInputs['UserWhereInput'] | null // UserWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = keyof NexusGenInputs

export type NexusGenEnumNames = keyof NexusGenEnums

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: PrismaContext
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
