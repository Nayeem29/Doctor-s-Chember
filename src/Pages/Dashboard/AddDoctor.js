import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const AddDoctor = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const { data: services, isLoading } = useQuery('service', () => fetch('http://localhost:5000/service')
    .then(res => res.json()));
  const imgStorageKey = '31845d07c09eea2471808b91115471cc';

  if (isLoading) {
    return <Loading />
  }
  const onSubmit = data => {
    // console.log(data);
    const image = data?.photo[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img
          }
          fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          }).then(res => res.json())
            .then(finalData => {
              if (finalData.insertedId) {
                toast.success('New Doctor is added!');
                reset();
              } else {
                toast.error('No Doctor found!!');
              }
            })
        }
      })

    // reset();
  };
  return (
    <div>
      <h1>Add a Doctore here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text"
            placeholder="Name" className="input input-bordered w-full max-w-xs"
            {...register("name",
              {
                required: {
                  value: true,
                  message: 'This field is required'
                },
              }, {
              maxLength: {
                value: 20,
                message: 'Max 20 characters'
              }
            })}
          />
          <label className="label">
            {errors.name?.type === 'required' &&
              <span className="label-text-alt">{errors.name.message}</span>}
            {errors.name?.type === 'maxLeangth' &&
              <span className="label-text-alt">{errors.name.message}</span>}
          </label>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"
            {...register("email",
              {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              }, {
              pattern:
              {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a Valid email'
              }
            }
            )}
            placeholder="Email"
            className="input input-bordered w-full max-w-xs" />

          <label className="label">
            {errors.email?.type === 'required' &&
              <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
            {errors.email?.type === 'pattern' &&
              <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
          </label>

          <label className="label">
            <span className="label-text">Specialty</span>
          </label>

          <select  {...register('specialty')}
            className="select select-primary w-full max-w-xs">
            {
              services.map((item) => <option key={item._id} value={item.name}>
                {item.name}
              </option>)
            }
          </select>

          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input type="file"
            {...register("photo",
              {
                required: {
                  value: true,
                  message: 'This field is required'
                }
              }
            )}
            placeholder="Photo"
            className="input input-bordered w-full max-w-xs" />
          {errors.photo?.type === 'required' &&
            <span className='label-text-alt text-red-500'>{errors.photo.message}</span>}

          <input type="submit" value="Submit" className="btn mt-3" />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;