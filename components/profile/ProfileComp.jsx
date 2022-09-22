import {
  Alert,
  Avatar,
  Button,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useContextData } from '../../lib/GlobalContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from '@mui/lab/LoadingButton';
import { useCookies } from 'react-cookie';

const ProfileComp = () => {
  const { userInfo, userProfile, verifyProfile } = useContextData();
  console.log('userProfile: ', userProfile);
  console.log('verifyProfile: ', verifyProfile);
  const [cookies] = useCookies(['tailors-db']);
  const [verifiedAlert, setVerifiedAlert] = useState(true);
  // useEffect(() => {
  //   // const verified = verifyProfile?.verified;

  //   setVerifiedAlert(verifyProfile?.verified);
  // }, [verifyProfile?.verified]);

  console.log('verifiedAlert :>> ', verifiedAlert);
  const [formValue, setFormValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    username: '',
    gender: '',
    // image: '',
  });
  const [selectValue, setSelectValue] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  console.log('formValue', formValue);

  useEffect(() => {
    if (userProfile) {
      setFormValue({
        first_name: userProfile?.first_name,
        last_name: userProfile?.last_name,
        // email: userProfile?.email,
        phone: userProfile?.phone,
        address: userProfile?.address,
        // username: userProfile?.username,
        gender: userProfile?.gender,
        // image: userProfile?.image,
      });
      setSelectValue(userProfile?.gender || '');
      setVerifiedAlert(verifyProfile?.verified);
    } else {
      setFormValue({
        first_name: '',
        last_name: '',
        // email: '',
        phone: '',
        address: '',
        // username: '',
        gender: '',
        // image: '',
      });
    }
  }, [userProfile, verifyProfile?.verified]);

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleCloseVerifyAlert = () => {
    setVerifiedAlert(false);
  };

  const handleResendConfirmation = async () => {
    try {
      if (userInfo) {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/registration/resend-email/`,
          {
            email: userInfo?.email,
          }
        );
        // .then((res) => {
        //   if (res.status === 200) {
        //     toast.success('Email sent successfully', {
        //       theme: 'colored',
        //     });
        //     console.log(res);
        //   } else {
        //     toast.error('Something went wrong', {
        //       theme: 'colored',
        //     });
        //   }
        // });
        if (res.status === 200) {
          toast.success('Email sent successfully', {
            theme: 'colored',
          });
          console.log(res);
        }
        // else {
        //   console.error('error inside try');
        //   // toast.error('Something went wrong', {
        //   //   theme: 'colored',
        //   // });
        // }
      }
    } catch (error) {
      console.error('error inside error');

      if (
        typeof error.response.data === 'object' &&
        error.response.data !== null
      ) {
        Object.values(error.response.data).forEach((value) => {
          value.forEach((val) => {
            toast.error(val, {
              theme: 'colored',
            });
          });
        });
      } else {
        toast.error('Something went wrong', {
          theme: 'colored',
        });
      }
    }
  };

  const handleUpdateProfile = async () => {
    setLoadingState(true);
    try {
      const { first_name, last_name, phone, address, gender } = formValue;
      if (
        first_name !== '' &&
        last_name !== '' &&
        phone !== '' &&
        address !== '' &&
        gender !== ''
      ) {
        await axios.patch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/dj-rest-auth/user/`,
          {
            ...formValue,
          },
          {
            headers: {
              Authorization: `Token ${cookies['tailors-db']}`,
            },
          }
        );
        toast.success('Profile updated successfully', {
          theme: 'colored',
        });
      } else {
        toast.error('Please fill all the fields', {
          theme: 'colored',
        });
      }
    } catch (error) {
      if (
        typeof error.response.data === 'object' &&
        error.response.data !== null
      ) {
        Object.values(error.response.data).forEach((value) => {
          if (Array.isArray(value)) {
            value.forEach((val) => {
              toast.error(val, {
                theme: 'colored',
              });
            });
          } else {
            toast.error(value, {
              theme: 'colored',
            });
          }
        });
      } else {
        toast.error('Something went wrong', {
          theme: 'colored',
        });
      }
    } finally {
      setLoadingState(false);
    }
  };
  return (
    <div className='tw-p-4'>
      <Typography
        variant='h4'
        className='tw-font-fam4 tw-font-extrabold tw-text-indigo-500'
      >
        Profile
      </Typography>
      <Alert
        severity='info'
        className={`tw-my-3 ${verifiedAlert ? 'tw-hidden' : 'tw-flex'}`}
        onClose={handleCloseVerifyAlert}
      >
        <Typography
          variant='body1'
          className='tw-font-fam1 tw-text-xs tw-font-medium md:tw-text-base'
        >
          Your email is not verified. Please click the &apos;verify button&apos;
          button below to get a link.
        </Typography>
      </Alert>
      <div className='tw-flex tw-flex-col tw-justify-center tw-space-y-4 sm:tw-flex-row sm:tw-space-y-0 sm:tw-space-x-4'>
        {/* avatar */}
        <div className='tw-flex tw-flex-col tw-rounded-lg tw-border tw-border-solid tw-border-gray-300 tw-shadow-md sm:tw-w-[30%]'>
          <div className='tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-between tw-space-y-6 tw-p-2'>
            <div className='tw-mt-4 tw-flex tw-flex-col tw-items-center'>
              <div className=''>
                <Avatar
                  alt='Remy Sharp'
                  src='https://material-ui.com/static/images/avatar/1.jpg'
                  sx={{ width: 130, height: 130 }}
                />
              </div>
              <div className=' tw-flex tw-flex-col tw-space-y-1'>
                <Typography variant='sutitle1' className='tw-text-center'>
                  Joined 4 months ago
                </Typography>
                <Typography
                  variant='sutitle1'
                  className='tw-text-center tw-text-xs'
                >
                  Allowed *.jpeg, *.png, *.jpg, *.gif{' '}
                </Typography>
              </div>
            </div>
            <div className='tw-flex tw-flex-row tw-items-center tw-space-x-2'>
              {verifiedAlert ? (
                <Button
                  variant='contained'
                  color='primary'
                  disabled={verifiedAlert}
                  className='tw-text-xs tw-normal-case'
                >
                  Verified
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  // size='small'
                  // startIcon={<PhotoCameraIcon />}
                  onClick={handleResendConfirmation}
                  className='tw-text-xs tw-normal-case'
                >
                  Verify Profile
                </Button>
              )}

              <IconButton
                color='primary'
                aria-label='upload picture'
                component='label'
              >
                <input hidden accept='image/*' type='file' />
                <PhotoCameraIcon />
              </IconButton>
            </div>
          </div>
        </div>

        {/* profile details */}
        <div className='tw-flex tw-flex-col tw-rounded-lg tw-border tw-border-solid tw-border-gray-300 tw-p-3 tw-shadow-md sm:tw-w-[70%]'>
          <div className=' tw-grid tw-grid-cols-1 tw-gap-x-4 tw-gap-y-2   sm:tw-grid-cols-2'>
            {/* first_name */}
            <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label
                className='tw-font-fam1  tw-text-sm tw-font-medium tw-text-gray-500'
                htmlFor='first_name'
              >
                First Name
              </label>
              <OutlinedInput
                id='first_name'
                name='first_name'
                type='text'
                size='small'
                onChange={handleChange}
                value={formValue?.first_name}

                // placeholder='Email'
              />
            </div>
            {/* last_name */}
            <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label
                className='tw-font-fam1 tw-text-sm tw-font-medium tw-text-gray-500'
                htmlFor='last_name'
              >
                Last name
              </label>
              <OutlinedInput
                id='last_name'
                name='last_name'
                type='text'
                size='small'
                onChange={handleChange}
                value={formValue?.last_name}
                // placeholder='Email'
              />
            </div>
            {/* email */}
            {/* <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label
                className='tw-font-fam1 tw-text-sm tw-font-medium tw-text-gray-500'
                htmlFor='email'
              >
                Business Email
              </label>
              <OutlinedInput
                id='email'
                name='email'
                type='email'
                size='small'
                onChange={handleChange}
                value={formValue?.email}
                // placeholder='Email'
              />
            </div> */}
            {/* username */}
            {/* <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label
                className='tw-font-fam1 tw-text-sm tw-font-medium tw-text-gray-500'
                htmlFor='username'
              >
                Username
              </label>
              <OutlinedInput
                id='username'
                name='username'
                type='text'
                size='small'
                onChange={handleChange}
                value={formValue?.username}
                // placeholder='Email'
              />
            </div> */}

            {/* phone number */}
            <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label
                className='tw-font-fam1 tw-text-sm tw-font-medium tw-text-gray-500'
                htmlFor='phone'
              >
                Phone Number
              </label>
              <OutlinedInput
                id='phone'
                name='phone'
                type='tel'
                size='small'
                onChange={handleChange}
                value={formValue?.phone}
                // placeholder='Email'
              />
            </div>
            {/* gender */}
            <div className='tw-flex tw-flex-col tw-space-y-1'>
              <label
                className='tw-font-fam1 tw-text-sm tw-font-medium tw-text-gray-500'
                htmlFor='gender'
              >
                Gender
              </label>
              <Select
                id='gender'
                name='gender'
                value={selectValue}
                size='small'
                onChange={(e) => {
                  handleSelectChange(e);
                  handleChange(e);
                }}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
              </Select>
            </div>
            {/* address */}
            <div className='tw-col-span-1 tw-flex tw-flex-col tw-space-y-1 sm:tw-col-span-2'>
              <label
                className='tw-font-fam1 tw-text-sm tw-font-medium tw-text-gray-500'
                htmlFor='address'
              >
                Business Address
              </label>
              <OutlinedInput
                multiline
                id='address'
                name='address'
                type='text'
                size='small'
                onChange={handleChange}
                value={formValue?.address}
                // placeholder='Email'
              />
            </div>
          </div>
          <div className='tw-mt-4 tw-flex tw-flex-row tw-justify-end'>
            <LoadingButton
              loading={loadingState}
              variant='contained'
              color='primary'
              className='tw-rounded-lg tw-text-sm tw-font-semibold tw-capitalize tw-text-white tw-transition-all tw-duration-300 tw-ease-in hover:tw-bg-sky-500 hover:tw-text-white'
              onClick={handleUpdateProfile}
            >
              Save Changes
            </LoadingButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfileComp;
