const uuid = require('uuid').v4
const fs   = require('fs')
const path = require('path')

    class NuevoUsuario {

    constructor (nickname, first_name, last_name, email, password, repeatPassword){
        this.nickname       = nickname
        this.first_name     = first_name
        this.last_name      = last_name
        this.email          = email
        this.password       = password
        this.repeatPassword = repeatPassword
        this.id             = uuid()

    }

    toJSON() {
        
        return{
            nickname       :this.nickname,
            first_name     :this.first_name,
            last_name      :this.last_name,
            email          :this.email,
            password       :this.password,
            repeatPassword :this.repeatPassword,
            id             : this.id          
        }
    }


    async save(){
        const nuevosUsuarios =  await NuevoUsuario.getAll()
        nuevosUsuarios.push(this.toJSON())

        return new Promise( ( resolve,reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'nuevosUsuarios.json'),
                JSON.stringify(nuevosUsuarios),
                (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    } 
                }
            )
        })

        console.log('nuevosUsuarios',nuevosUsuarios)

    }

    static getAll(){
        return new Promise( (resolve, reject) => {
            fs.readFile( 
                path.join(__dirname, '..', 'data', 'nuevosUsuarios.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject (err)
                    }else{
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }
  }


module.exports = NuevoUsuario;
