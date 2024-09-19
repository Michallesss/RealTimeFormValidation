import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { formSchema, formType } from '../schemas/form.schema';
import axios from "axios";

function App() {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formType>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: { 
      name: "",
      surname: "",
      email: "",
      password: "",
      password2: "",
      age: 0,
      birthdate: new Date(),
      country: undefined,
      gender: undefined,
      marketing: false,
      statute: false,
    }
  });

  const [countries, setCountries] = useState([]);

  const onSubmit: SubmitHandler<formType> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error: any) {
      setError("root", {
        message: error.message,
      });
    }
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" placeholder="Imie" />
      {errors.name && <p>{errors.name.message}</p>}
      
      <input {...register("surname")} type="text" placeholder="Nazwisko" />
      {errors.surname && <p>{errors.surname.message}</p>}

      <input {...register("email")} type="text" placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password")} type="password" placeholder="Hasło" />
      {errors.password && <p>{errors.password.message}</p>}

      <input {...register("password2")} type="password" placeholder="Powtórz hasło" />
      {errors.password2 && <p>{errors.password2.message}</p>}

      <input {...register("age", { valueAsNumber: true, })} type="number" placeholder="Wiek" />
      {errors.age && <p>{errors.age.message}</p>}

      <input {...register("birthdate", { valueAsDate: true, })} type="date" />
      {errors.birthdate && <p>{errors.birthdate.message}</p>}

      <select {...register("country")}>
        <option value="">Wybierz kraj</option>
        {
          countries.map((country: any, index: number) => (
            <option key={index} value={country.name.common}>{country.flag} {country.name.common}</option>
          ))
        }
      </select>
      {errors.country && <p>{errors.country.message}</p>}

      <select {...register("gender")}>
        <option>Wybierz płeć</option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      {errors.gender && <p>{errors.gender.message}</p>}

      <div className="block">
        <label htmlFor="marketing">Zgoda na marketing</label>
        <input id="marketing" {...register("marketing")} type="checkbox" />
        {errors.marketing && <p>{errors.marketing.message}</p>}
      </div>

      <div className="block">
        <label htmlFor="statute">Akceptuję regulamin</label>
        <input id="statute" {...register("statute")} type="checkbox" />
        {errors.statute && <p>{errors.statute.message}</p>}
      </div>
  
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Wysyłanie..." : "Wyślij"}
      </button>
      {errors.root && <p>{errors.root.message}</p> }
      {process.env.NODE_ENV === 'development' && (<DevTool control={control} />)}
    </form>
  );
}

export default App
