import React, {useState, useCallback} from 'react';
import { NextPage } from 'next';
import { Box, TextField, Card, CardHeader, CardContent, Divider, Switch, FormGroup, FormControlLabel, Button } from '@mui/material';
import Image from "next/image";
import {useSignInMutation} from '../../store/api/registerApi';

const SignIn:NextPage = () => {

    const [signIn, result] = useSignInMutation();

    const [form, setForm] = useState({
        email:'',
        password:'',
    })

    const { email, password } = form;

    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    },[form])

    const handleSignIn = useCallback(async()=> {
        try {
            const result = await signIn(form);
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    },[form, signIn])

    return (
        <>
            <Box className='flex flex-nowrap bg-slate-200 flex-1  gap-0 h-screen'>
                <Box className="flex-grow">
                    <Box className="w-full h-full">
                        <Image
                            className='w-full h-full min-w-full min-h-full'
                            src="/asd.jpg"
                            alt=""
                            width={'100%'}
                            height={'100%'}
                        
                        />
                    </Box>
                </Box>
                <Box className="flex-grow bg-white">
                    <Box className="px-2 py-20 flex justify-center">
                        <Box className="w-full">
                            <Card className="px-5">
                                <CardHeader title="SignIn" />
                                <CardContent className="my-10">
                                    <TextField name="email" value={email} onChange={handleChange} label="Email Address" className='w-full py-3 my-3' />
                                    <Divider />
                                    <TextField type="password" name="password" value={password} onChange={handleChange} label="Password" className='w-full py-3 my-3' />        
                                    <FormGroup>
                                        {/* <FormControlLabel control={<Switch checked={false} />} label="remember me" />     */}
                                    </FormGroup>
                                    <Box className="my-3">      
                                        <Button onClick={handleSignIn} className="bg-emerald-200" variant='contained' fullWidth>SIGN IN</Button>
                                    </Box> 
                                </CardContent>
                            
                            </Card>
                            
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SignIn;