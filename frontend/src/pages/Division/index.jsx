import { NavLink } from 'react-router-dom'

import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const createDivisionFormSchema = z.object({
  divisionName: z.string(1, 'Digite o Nome da Divisão!'),
  exercise: z.array(
    z.object({
      exerciseName: z.string().min(1, 'Digite o Nome do Exercício!'),
      series: z.array(
        z.object({
          reps: z.coerce.number(),
          weight: z.coerce.number(),
        }),
      ),
    }),
  ),
})

export const Division = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createDivisionFormSchema),
    defaultValues: {
      divisionName: '',
      exercise: [{ exerciseName: '', series: [{ reps: '', weight: '' }] }],
    },
  })

  const {
    // campos gerenciados pelo usefieldArray
    fields: exerciseFields,
    // append e remove pra adicionar ou remover campos
    append: appendExercise,
    remove: removeExercise,
  } = useFieldArray({
    // objeto pro fieldArray gerenciar os campos dinamicamente
    control,
    // nome do campo, que no caso é um array
    name: 'exercise',
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome da Divisão</label>
        <input {...register('divisionName')} />
        {errors.divisionName && <p>{errors.divisionName.message}</p>}
      </div>

      {exerciseFields.map((exercise, exerciseIndex) => (
        <div key={exercise.id}>
          <label>Nome do Exercício</label>
          <input {...register(`exercise.${exerciseIndex}.exerciseName`)} />
          {errors.exercise?.[exerciseIndex]?.exerciseName && (
            <p>{errors.exercise[exerciseIndex].exerciseName.message}</p>
          )}

          <SeriesFields
            control={control}
            register={register}
            exerciseIndex={exerciseIndex}
            errors={errors}
          />

          <button type="button" onClick={() => removeExercise(exerciseIndex)}>
            Remover Exercício
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          appendExercise({
            exerciseName: '',
            series: [{ reps: '', weight: '' }],
          })
        }
      >
        Adicionar Exercício
      </button>

      <button type="submit">Salvar Divisão</button>
    </form>
  )
}

const SeriesFields = ({ control, register, exerciseIndex, errors }) => {
  const {
    fields: seriesFields,
    append: appendSeries,
    remove: removeSeries,
  } = useFieldArray({
    control,
    name: `exercise.${exerciseIndex}.series`,
  })

  return (
    <>
      {seriesFields.map((series, seriesIndex) => (
        <div key={series.id}>
          <label>Repetições</label>
          <input
            {...register(
              `exercise.${exerciseIndex}.series.${seriesIndex}.reps`,
            )}
          />
          {errors.exercise?.[exerciseIndex]?.series?.[seriesIndex]?.reps && (
            <p>
              {errors.exercise[exerciseIndex].series[seriesIndex].reps.message}
            </p>
          )}

          <label>Carga</label>
          <input
            {...register(
              `exercise.${exerciseIndex}.series.${seriesIndex}.weight`,
            )}
          />
          {errors.exercise?.[exerciseIndex]?.series?.[seriesIndex]?.weight && (
            <p>
              {
                errors.exercise[exerciseIndex].series[seriesIndex].weight
                  .message
              }
            </p>
          )}

          <button type="button" onClick={() => removeSeries(seriesIndex)}>
            Remover Série
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => appendSeries({ reps: '', weight: '' })}
      >
        Adicionar Série
      </button>
    </>
  )
}
