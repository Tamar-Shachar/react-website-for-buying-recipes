export const addPastry = (pastry, place) => {
	return{
	type: "ADDPASTRY",
	payload : {pastry, place}
	};
};

export const removePastry = (id, place) => {
	return{
	type: "REMOVEPASTRY",
	payload : {id, place}
	};
};
export const emptying = () => {
	return{
	type: "EMPTYING"
	};
};


