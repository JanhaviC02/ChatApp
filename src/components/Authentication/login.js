import React from 'react'
import { FormControl, FormLabel, VStack, Input, useToast } from '@chakra-ui/react'
import { InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [show, setShow] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    const handlePasswordShow = () => setShow(!show);

    const submitHandler = async () => { // <-- Make the function asynchronous
        setLoading(true);
        if (!email || !password) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post(  // <-- Await the axios POST request
                "/api/user/login",
                { email, password },
                config  
            );
            // Assuming data is an object with userInfo, adjust this part accordingly
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/chats");
        } catch (error) {
            toast({
                title: "Error Occured!",  
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    }
  
    return (
        <VStack spacing={4}>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                    type='email' 
                    placeholder='Enter your email' 
                    value={email}  // <-- Capture the input value
                    onChange={(e) => setEmail(e.target.value)}  // <-- Update the email state
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? 'text' : 'password'} 
                        placeholder='Enter your password'
                        value={password}  // <-- Capture the input value
                        onChange={(e) => setPassword(e.target.value)}  // <-- Update the password state
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handlePasswordShow}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme='blue' width='100%' onClick={submitHandler} isLoading={loading}>Login</Button>
            {/* <Button colorScheme='red' width='100%'>Get Guest User Credentials</Button> */}
        </VStack>
    )
}

export default Login;
