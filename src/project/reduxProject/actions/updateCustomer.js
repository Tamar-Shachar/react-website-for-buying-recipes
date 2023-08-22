export const logout = () => {
	return{
	type: "LOGOUT",
	};
};
export const signup = (firstName,lastName,password,email) => {
	console.log(firstName,lastName,password,email);

	return{
	type: "SIGNUP",
	payload : {firstName,lastName,password,email}
	};
};
export const logIn = (firstName,lastName) => {
	return{
	type: "LOGIN",
	payload : {firstName,lastName}
	};
};

