import db from "./firebase.js"
import { collection,  getDocs, setDoc, query, doc } from "firebase/firestore"

// const addData = async (doc, col) => {

// 	// const docRef = await addDoc(collection(db, col), doc) 

// }

const getAllData = async (col) => {

	const snapShot = await getDocs(collection(db, col));

	// snapShot.forEach((doc) => {
	// 	console.log(doc.id, " => ", doc.data());	
	// });

	return snapShot.docs.map(doc => doc.data());
}

// const paginateDocs = async (col) => {
// 	const page = await query(collection(db, col), limit())
	
// 	snapShot.forEach((doc) => {
// 		console.log(doc.data())
// 	})

// 	return null;
// }

const saveTree = async (docData) =>  {

	// const positionsRef =  collection(db,"positions");

	const docRef = doc(db, 'Positions', '1');

	console.log(await setDoc(docRef, docData));
	console.log("saving data to firebase");
	// const id = 1 // there is only one element with an id of 1
	// const result = await positionRef.child(id).update(data)

	// console.log(result);

}	

const testFunctions = async () => {

	// saveTree({});
	// let data = await getAllData("Positions")
}

// testFunctions()


export { getAllData, saveTree };