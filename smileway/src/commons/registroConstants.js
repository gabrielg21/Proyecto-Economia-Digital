const INITIAL_STATE = {
  primerNombre:'',
  segundoNombre:'',
  primerApellido:'',
  segundoApellido:'',
  email:'',
  password:'',
  phone:'',
  primerNombreTouched: false,
  primerNombreValido: false,
  segundoNombreTouched: false,
  segundoNombreValido: true,
  primerApellidoTouched: false,
  primerApellidoValido: false,
  segundoApellidoTouched: false,
  segundoApellidoValido: true,
  emailTouched: false,
  emailValid: false,
  passwordTouched: false,
  passwordValid: false,
  confirmTouched:false,
  confirmValid: false,
  phoneTouched: false,
  phoneValid: false,
  odontologo: true,
  paciente: false,
  isLoading: false
}

export {INITIAL_STATE};