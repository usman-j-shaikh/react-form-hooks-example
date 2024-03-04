export default function InputField({register, errors}) {
    return (
        <>
            <label>Name</label>
            <input
                {...register("name", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                })}
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "maxLength" && (
                <p>Name cannot exceed 20 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
        </>
    )
}