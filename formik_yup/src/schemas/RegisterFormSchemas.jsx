import * as yup from 'yup';

export const RegisterFormSchemas = yup.object().shape({
    email: yup.string().email("Geçerli email adresi giriniz").required("Email adresi zorunlu"),
    age: yup
        .number("Lütfen bir sayı giriniz")
        .transform((value, originalValue) => {
            return originalValue.trim() === "" ? undefined : value;
        })
        .positive("Pozitif bir değer giriniz")
        .integer("Tam sayı giriniz")
        .required("Yaş alanı zorunlu"),
    password: yup.string().required("Şifre Alanı Zorunlu"),
    confirmpassword: yup.string().required("Şifre tekrarı zorunlu").oneOf([yup.ref('password', yup.password)]),
    term: yup
        .boolean()
        .transform((value, originalValue) =>
            originalValue === "true" || originalValue === true ? true : false
        )
        .oneOf([true], "Lütfen kutucuğu onaylayınız")

})