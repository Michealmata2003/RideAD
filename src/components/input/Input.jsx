import Image from "next/image";


export const CustomFormInput = ({ type, name, placeholder, label, icon }) => {
  return (
    <div className="pt-2">
      <label htmlFor="">{label}</label>

      <div className="flex bg-Fade p-[5px] rounded">
        <Image
          src={icon}
          alt="Logo"
          width={18}
          height={10}
        />
        <input className="p-[5px] w-full outline-0 rounded bg-Fade" type={type} placeholder={placeholder} name={name} />
      </div>

    </div>
  )
}

export const CustomPasswordInput = ({ lock, type, name, placeholder, label, icon }) => {
  return (
    <div className="pt-2">
      <label htmlFor="">{label}</label>

      <div className="flex bg-Fade p-[5px] rounded">
        <Image
          src={lock}
          alt="Logo"
          width={18}
          height={10}
        />
        <input className="p-[5px] outline-0 w-full rounded bg-Fade" type={type} placeholder={placeholder} name={name} />
        <Image
          src={icon}
          alt="Logo"
          width={18}
          height={10}
        />
      </div>

    </div>
  )
}


export const CustomInput = ({ type, name, placeholder, label }) => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <label htmlFor="">{label}</label>
      <input className="outline-0 w-full rounded bg-Fade p-[5px]" type={type} placeholder={placeholder} name={name} />
    </div>
  )
}


