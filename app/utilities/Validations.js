import validation from 'validate.js'

export default function validate(fieldName, value) {
  const constraints = {
    name: {
      presence: { allowEmpty: false },
      length: {
        minimum: 3,
        message: 'Name must be more than 3 characters',
      },
    },
    email: {
      presence: { allowEmpty: false },
      format: {
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'is invalid',
      },
    },
    password: {
      presence: { allowEmpty: false },
      length: {
        minimum: 6,
        message: 'Passsword must be more than 6 characters.',
      },
    },
    location: {
      presence: { allowEmpty: false },
    },
    rating: {
      numericality: {
        greaterThan: 0,
      },
    },
    date: {
      presence: { allowEmpty: false },
    },
    category: {
      presence: { allowEmpty: false },
    },
  }

  const formValues = {}
  formValues[fieldName] = value

  const formFields = {}
  formFields[fieldName] = constraints[fieldName]

  const result = validation(formValues, formFields)

  if (result) {
    return result[fieldName][0]
  }
  return null
}
