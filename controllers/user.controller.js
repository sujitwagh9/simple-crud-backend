import User from "../models/user.model.js"


const getUser =async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getUserbyId=async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const createUser= async(req,res)=>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

const updateUser=async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return res.status(404).send("User not found");
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteUser=async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.status(200).send("User deleted");
    } catch (error) {
        res.status(500).send(error);
    }
};
export { getUser, getUserbyId, createUser, updateUser, deleteUser };
