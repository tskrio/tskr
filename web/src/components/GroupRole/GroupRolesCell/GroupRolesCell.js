import { Link, routes, useLocation } from '@redwoodjs/router'
import TableComponent from 'src/components/TableComponent'
export const beforeQuery = () => {
  const { search } = useLocation()
  let params = new URLSearchParams(search)

  //console.log(params.get('filter'))
  return {
    variables: {
      filter: params.get('filter'),
    },
  }
}
const DELETE_GROUP_ROLE_MUTATION = gql`
  mutation DeleteGroupRoleMutation($id: Int!) {
    deleteGroupRole(id: $id) {
      id
    }
  }
`
export const QUERY = gql`
  query FindGroupRoles($filter: String) {
    groupRoles(filter: $filter) {
      id
      createdAt
      updatedAt
      groupId
      group {
        name
        id
        description
      }
      role
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ groupRoles }) => {
  let title = 'Group Roles'
  let columns = [
    {
      Header: 'Created At',
      accessor: 'createdAt', // accessor is the "key" in the data
    },
    {
      Header: 'Updated At',
      accessor: 'updatedAt',
    },
    {
      Header: 'Group',
      accessor: 'group.name',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
    },
  ]

  let data = groupRoles.map((groupRole) => {
    return {
      ...groupRole,
      createdAt: new Date(
        groupRole.createdAt
      ).toLocaleString(/**TODO: User preference! */),
      updatedAt: new Date(
        groupRole.createdAt
      ).toLocaleString(/**TODO: User preference! */),
    }
  })
  let queries = {
    QUERY: QUERY,
    DELETEMUTATION: DELETE_GROUP_ROLE_MUTATION,
  }
  let recordRoutes = {
    editRecord: (prop) => {
      return routes.groupRole(prop)
    },
    createRecord: () => {
      return routes.newGroupRole()
    },
    readRecords: (props) => {
      return routes.groupRoles(props)
    },
  }
  let display = 'id'
  let roles = {
    createRecord: ['groupRoleCreate'],
    updateRecord: ['groupRoleUpdate'],
    readRecord: ['groupRoleRead'],
    deleteRecord: ['groupRoleDelete'],
  }
  let queryVariables = {}
  return (
    <TableComponent
      title={title}
      columns={columns}
      data={data}
      queries={queries}
      routes={recordRoutes}
      display={display}
      roles={roles}
      queryVariables={queryVariables}
    />
  )
}
