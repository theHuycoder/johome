import { gql } from "@apollo/client";

export const UPLOAD_FILE_MUTATION = gql`
 mutation UploadFile(
  $file: Upload!
  $fileInfoInput: FileInfoInput
  $refID: ID
  $ref: String
  $field: String
 ) {
  upload(
   file: $file
   fileInfoInput: $fileInfoInput
   refID: $refID
   ref: $ref
   field: $field
  ) {
   data {
    id
    attributes {
     name
     url
     mime
     size
     previewUrl
     caption
    }
   }
  }
 }
`;

export const UPLOAD_FILES_MUTATION = gql`
 mutation UploadFiles(
  $files: [Upload]!
  $fileInfoInput: FileInfoInput
  $refID: ID
  $ref: String
  $field: String
 ) {
  upload(
   files: $files
   fileInfoInput: $fileInfoInput
   refID: $refID
   ref: $ref
   field: $field
  ) {
   data {
    id
    attributes {
     name
     url
     mime
     size
     previewUrl
     caption
    }
   }
  }
 }
`;

export const REMOVE_FILE_MUTATION = gql`
 mutation RemoveFile($id: ID!) {
  removeFile(id: $id) {
   data {
    id
    attributes {
     name
     url
    }
   }
  }
 }
`;

export const UPDATE_FILE_INFO_MUTATION = gql`
 mutation UpdateFileInfo($id: ID!, $info: FileInfoInput) {
  updateFileInfo(id: $id, info: $info) {
   data {
    id
    attributes {
     name
    }
   }
  }
 }
`;
