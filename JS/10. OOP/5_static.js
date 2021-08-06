//Static
class AdminService {

    static signUp(user) {
        console.log('Registrating a new admin user.')
        console.log(user);
    }

    static signIn(email, password) {
        console.log(`Signing in the admin with ${email} and ${password}`)
    }
}

AdminService.signUp({ firstName: 'Kalle', lastName: 'Anka' })
AdminService.signIn('kalle@mail.com', 'BytMig123')