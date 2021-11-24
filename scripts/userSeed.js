import Chance from 'chance'
const chance = new Chance()
let total = 10000
let _users = [
  {
    name: 'Adam Admin',
    email: 'admin@example.com',
    hashedPassword:
      '5f5f56d40b9ae6bf2abfd7804e97e607f9d7432feebb6371849f2676a5058999',
    salt: '881aed4f5703af38eaaab6e788d8e860',
    GroupMember: {
      create: {
        groupId: 1,
      },
    },
  },
  {
    name: 'Mike Manager',
    email: 'manager@example.com',
    hashedPassword:
      '5f5f56d40b9ae6bf2abfd7804e97e607f9d7432feebb6371849f2676a5058999',
    salt: '881aed4f5703af38eaaab6e788d8e860',
    GroupMember: {
      create: {
        groupId: 2,
      },
    },
  },
  {
    name: 'Eve Employee',
    email: 'employee@example.com',
    hashedPassword:
      '01328ad2d2463d077f3e2f5dace839eff9eaf86e6d41b2d579df8c33a552f594',
    salt: '3e6780c35a4e5ad17aafc7a6230b1163',
    GroupMember: {
      create: {
        groupId: 3,
      },
    },
  },
]
while (_users.length < total) {
  _users.push({
    name: chance.name(),
    email: `${_users.length}@example.com`,
    GroupMember: {
      create: {
        groupId: chance.integer({ min: 1, max: 3 }),
      },
    },
  })
}
export const users = _users
