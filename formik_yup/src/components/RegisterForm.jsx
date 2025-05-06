import React from 'react'
import { useFormik } from 'formik';
import { RegisterFormSchemas } from '../schemas/RegisterFormSchemas';
function RegisterForm() {
    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000)
    }


    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: ' ',
            password: '',
            confirmpassword: '',
            term: ' ',
        },
        validationSchema: RegisterFormSchemas
    });
    console.log(errors)
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit} >
                <label className='title'>KAYIT OL</label>
                <div className='form-group' >
                    <label>E-mail</label><br></br>
                    <input type="text" id='email'
                        placeholder='E-mail giriniz'
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p className='input-error'>{errors.email}</p>}

                </div>
                <div className='form-group'>

                    <label>Yaş</label><br></br>
                    <input type="number" id='age'
                        placeholder='Yaşınızı giriniz'
                        value={values.age}
                        onChange={handleChange} />
                    {errors.age && <p className='input-error'>{errors.age}</p>}

                </div>
                <div className='form-group'>

                    <label>Şifre </label><br></br>
                    <input type="password" id='password'
                        placeholder='Şifrenizi  giriniz'
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p className='input-error'>{errors.password}</p>}

                </div>
                <div className='form-group'>

                    <label>Şifre Tekrar</label><br></br>
                    <input type="password" id='confirmpassword'
                        placeholder='Şifrenizi tekrar giriniz'
                        value={values.confirmpassword}
                        onChange={handleChange} />
                    {errors.confirmpassword && <p className='input-error'>{errors.confirmpassword}</p>}

                </div>
                <div className='form-group'>


                    <input type="checkbox" id='term'
                        placeholder='Şifrenizi tekrar giriniz'
                        value={values.term}
                        onChange={handleChange} />
                    <label id='term'>Kullanıcı Sözleşmesini Kabul Ediyorum.</label>
                    {errors.term && <p className='input-error'>{errors.term}</p>}

                </div>
                <div>
                    <button type='submit' className='savebtn' > Kaydet</button>
                </div>
            </form>
        </div>

    )
}

export default RegisterForm
