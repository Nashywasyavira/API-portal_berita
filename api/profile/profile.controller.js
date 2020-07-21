const {
    serviceAddProfile,
    serviceGetProfile,
    serviceGetProfileById,
    serviceUpdateProfile,
    serviceDeleteProfile,
    serviceGetProfileByEmail } = require("./profile.service");

const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken")

module.exports = {
    controllerAddProfile: (req, res)=>{
        data_profile = {
            id_profile : req.body.id_profile,
            nama : req.body.nama,
            no_tlpn : req.body.no_tlpn,
            email : req.body.email,
            password : req.body.password
        }
        const salt = genSaltSync(10);
        data_profile.password = hashSync(data_profile.password, salt);
        serviceAddProfile(data_profile, (err, results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    status : false,
                    message : "Database connection error"
                })
            } else {
                return res.status(200).json({
                    status: true,
                    data: results,
                    message : "Anda berhasil registrasi, silahkan login!"
                })
            }
        })
    },

    controllerGetProfileById: (req, res)=>{
        const body = req.body.id_profile
        serviceGetProfileById(body, (err, results)=>{
            if(err){
                console.log(err)
                return res.json ({
                    status : false,
                    message : "Anda telah gagal menampilkan profile"
                })
            } else {
                return res.json ({
                    status: true,
                    data: results,
                    message : "Berhasil menampilkan profil sesuai id"
                })
            }
        })
    },

    controllerGetProfile: (req, res)=>{
        const body = req.body;
        serviceGetProfileByEmail(body.email, (err, results)=>{
            if(err){
                console.log(err)
                return
            } else {
                return res.json({
                    status: true,
                    data: results,
                    message: "Anda telah sukses menampilkan data!"
                })
            }
        })
    },

    controllerUpdateProfile: (req, res)=>{
        const data_profile = {
            id_profile : req.body.id_profile,
            nama: req.body.nama,
            no_tlpn : req.body.no_tlpn
        }
        serviceUpdateProfile(data_profile, (err, results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    status : false,
                    data : "No data",
                    message : "Update profile gagal"
                })
            }else{
                return res.json({
                    status :true,
                    data :results,
                    message : "Update profile telah sukses"
                })
            }
        })
    },

    controllerDeleteProfile: (req, res)=>{
        const body = req.body.id_profile
        serviceDeleteProfile(body, (err, results)=>{
            if(err){
                console.log(err)
                return
            } if(!results) {
                return res.json({
                    status: false,
                    message: "Profile belum berhasil terhapus"
                })
            } else {
                return res.json({
                    status: true,
                    data : null,
                    message: "Profile telah berhasil terhapus"
                })
            }
        })
    },

    controllerLogin: (req, res)=>{
        const body = req.body;
        serviceGetProfileByEmail(body.email, (err, results)=>{
            if(err){
                console.log(err)
            } if(!results) {
                return res.json({
                    status : false,
                    message : "Invalid email or password"
                })
            }
            const result = compareSync(body.password, results.password)
            console.log(result);
            console.log(results.password);
            console.log(body.password);
            
            if(result){
                results.password = undefined
                const jsonwebtoken = sign({result:results}, "secretkey",{
                    expiresIn: "1h"
                })
                return res.json({
                    status: true,
                    data: jsonwebtoken,
                    message: "selamat, login anda berhasil!"
                })
            } else {
                return res.json({
                    status: false,
                    message: "Email atau password anda salah!",
                })
            }
        })
    }
}