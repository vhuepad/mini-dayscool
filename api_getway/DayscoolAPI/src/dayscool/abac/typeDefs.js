export const roleTypeDef = `
  type Role {
    role_uuid: String
    role_name: String
    role_description: String
  }
  input RoleInput {
    role_name: String
    role_description: String
  }`;
export const roleQueries = `
  getRoles: [Role]
  getRolebyUuid(role_uuid: String): Role
`;
export const roleMutations = `
  addRole(role: RoleInput): Role
  updateRole(role_uuid: String, role: RoleInput): Role
  deleteRole(role_uuid: String): Role
`;

export const microserviceTypeDef = `
  type Microservice {
    ms_uuid: String
    ms_name: String
    msDescription: String
  }
  input MicroserviceInput {
    ms_name: String
    ms_description: String
  }
`;
export const microserviceQueries = `
  getMicroservices: [Microservice]
  getMicroservicebyUuid(ms_uuid: String): [Microservice]
`;
export const microserviceMutations = `
  addMicroservice(microservice: MicroserviceInput): Microservice
  updateMicroservice(ms_uuid: String, microservice: MicroserviceInput): Microservice
  deleteMicroservice(ms_uuid: String): Microservice
`;

export const requestTypeDef = `
  type Request {
    request_uuid: String
    ms_uuid: String
    request_type: String
    description: String
  }
  input RequestInput {
    ms_uuid: String
    request_type: String
    description: String
  }
`;
export const requestQueries = `
  getRequests: [Request]
  getRequestbyUuid(request_uuid: String): [Request]
`;
export const requestMutations = `
  addRequest(request: RequestInput): Request
  updateRequest(request_uuid: String, request: RequestInput): Request
  deleteRequest(request_uuid: String): Request
`;

export const permissionTypeDef = `
  type Permission {
    permission_uuid: String
    permission_uuid: String
    request_uuid: String
  }
  input PermissionInput {
    role_uuid: String
    request_uuid: String
  }
`;
export const permissionQueries = `
  getPermissions: [Permission]
  getPermissionbyUuid(permission_uuid: String): [Permission]
`;
export const permissionMutations = `
  addPermission(permission: PermissionInput): Permission
  updatePermission(permission_uuid: String, permission: PermissionInput): Permission
  deletePermission(permission_uuid: String): Permission
`;
