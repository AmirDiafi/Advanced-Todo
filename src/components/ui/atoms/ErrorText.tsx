export const ErrorText = ({
  errorText = 'This field is required',
}: {
  errorText?: string
}) => {
  return (
    <div className='input_error_container'>
      <p className='input_error_text'>❌ {errorText}</p>
    </div>
  )
}
