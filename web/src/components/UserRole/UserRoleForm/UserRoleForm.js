import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import UserSelectCell from 'src/components/UserSelectCell'
import RoleSelectCell from 'src/components/RoleSelectCell'
const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserRoleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userRole?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <UserSelectCell label="User" defaultValue={props.userRole?.userId} />
        <FieldError name="userId" className="rw-field-error" />
        <RoleSelectCell label="Role" defaultValue={props.userRole?.role} />
        <FieldError name="role" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}
export default UserRoleForm