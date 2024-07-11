import { NavLink } from "react-router-dom"

import { z } from 'zod'
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const createDivisionFormSchema = z.object({
    divisionName: z.string(1, 'Digite o Nome da Divisão!'),
    exercise: z.array(z.object({
        exerciseName: z.string().min(1, 'Digite o Nome do Exercício!'),
        series: z.array(z.object({
            reps: z.coerce.number(),
            weight: z.coerce.number(),
        }))
    }))
})



export const Division = () => {

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: zodResolver(createDivisionFormSchema),
        // adicionado recentemente pra ver se funciona o default values
        defaultValues: {
            divisionName: '',
            exercise: [{
                exerciseName: '',
                series: [{
                    reps: 0,
                    weight: 0
                }]
            }]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'division'
    })


    function addNewExercise() {
        append({
            exercise: {
                exerciseName: '',
                series: {
                    reps: 0,
                    weight: 0
                }
            }
        })
    }

    function addNewSet() {
        append({
            reps:0,
            weight: 0
        })
    }

    function createExercise(data) {
        console.log(data)
    }

    return (

        <section>
            <div>

                <div>
                    <NavLink to='/'>
                        HOME
                    </NavLink>
                </div>

            </div>
            <form onSubmit={handleSubmit(createExercise)}>
                <div>
                    <input type="text" placeholder="Digite Aqui o Nome da Divisão" {...register("divisionName")} />
                    <button type="button" onClick={addNewExercise}>Adicionar Exercício</button>
                </div>
                {fields.map((field, index) => {
                    return(
                        <div key={field.id}>
                            <input type="text" placeholder="Digite o nome do Exercício" {...register(`exercise.${index}.exerciseName`)} />
                            <div>
                                <input type="number" {...register(`exercise.${index}.sets.reps`)}/>
                                <input type="number" />
                                <button type="button" onClick={addNewSet}>adicionar set</button>
                            </div>
                        </div>

                    )
                })}
                <button type="submit">s</button>
            </form>


        </section>
    )
}