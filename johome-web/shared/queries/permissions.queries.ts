import { gql } from "@apollo/client";

export const CREATE_USERS_PERMISSION_ROLE_MUTATION = gql`
 mutation CreateUsersPermissionsUser($data: UsersPermissionsRoleInput!) {
  createUsersPermissionsUser(data: $data) {
   ok
  }
 }
`;

export const UPDATE_USERS_PERMISSION_ROLE_MUTATION = gql`
 mutation UpdateUsersPermissionsUser(
  $id: ID!
  $data: UsersPermissionsRoleInput!
 ) {
  updateUsersPermissionsUser(id: $id, data: $data) {
   ok
  }
 }
`;
