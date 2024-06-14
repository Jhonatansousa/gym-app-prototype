import { randomUUID } from 'node:crypto'

export class DatabaseMemory {

    #name = new Map()


    list() {
        return Array.from(this.#name.entries()).map((nameArray) => {
            const id = nameArray[0]
            const data = nameArray[1]

            return {id, ...data}
        })
    }

    create(name){
        const nameId = randomUUID()

        this.#name.set(nameId, name)

    }
}