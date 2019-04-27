/*
 * @file: errors.js
 * @description: Error constants file for the application
 * @date: 14.12.2017
 * @author: Shiven Juneja
 * */

module.exports = {
  errors: {
    // Defaults
    default: 'Hmm, an unknown error occured',
    timeout: 'Server Timed Out. Check your internet connection',
    invalidJson: 'Response returned is not valid JSON',

    // Firebase Related
    invalidFirebase: 'Firebase is not connected correctly',

    // Member
    memberExists: 'Member already exists',
    missingFirstName: 'First name is missing',
    missingLastName: 'Last name is missing',
    missingFullName: 'Full name is missing',
    missingEmail: 'Email is missing',
    missingPassword: 'Password is missing',
    passwordsDontMatch: 'Passwords do not match',

    // Recipes
    recipe404: 'Recipe not found',
    missingMealId: 'Missing meal definition',

    // Locale
    localeDoesNotExist: 'Sorry, we do not support that local',
  },
}
