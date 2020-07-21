const {
    serviceAddBerita,
    serviceGetBerita,
    serviceGetBeritaById,
    serviceUpdateBerita,
    serviceDeleteBerita } = require('./berita.service')

module.exports = {
    controllerAddBerita:(req,res)=>{
        var date = new Date();
        var jsonDate = date.toJSON();
        var today = new Date(jsonDate);

        data_berita = {
            id_profile : req.body.id_profile,
            judul_berita : req.body.judul_berita,
            isi_berita : req.body.isi_berita,
            created : today,
            modified : today
        }
        serviceAddBerita(data_berita, (err,results)=>{
            if(err){
                console.log(err)
                return res.json({
                    status : false,
                    data : results,
                    message : "Penambahan berita gagal"
                })
            }else{
                return res.json({
                    status : true,
                    data : results,
                    message : "Penambahan berita telah sukses"
                })
            }
        })
    },

    controllerGetBerita:(req,res)=>{
        serviceGetBerita((err,results)=>{
            if(err){
                console.log(err)
                return res.json ({
                    status : false,
                    data : "No data",
                    message : "Anda gagal menampilkan data"
                })
            }else{
                return res.json({
                    status : true,
                    data : results,
                    message : "Data anda sudah ditampilkan"
                })
            }
        })
    },

    controllerGetBeritaById:(req,res)=>{
        const body = req.body.id_berita
        serviceGetBeritaById(body,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    status : true,
                    data : results,
                    message : "Berita anda sudah ditampilkan berdasarkan id"
                })
            }
        })
    },

    controllerUpdateBerita:(req,res)=>{
        var date = new Date();
        var jsonDate = date.toJSON();
        var now = new Date(jsonDate);

        data_berita = {
            id_berita : req.body.id_berita,
            judul_berita : req.body.judul_berita,
            isi_berita : req.body.isi_berita,
            modified : now
        }
        serviceUpdateBerita(data_berita,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    status : false,
                    data : results,
                    message : "Update berita anda gagal"
                })
            }else{
                return res.json({
                    status : true,
                    data : results,
                    message : "Update berita anda telah sukses!"
                })
            }
        })
    },

    controllerDeleteBerita:(req,res)=>{
        const body = req.body.id_berita
        serviceDeleteBerita(body,(err,results)=>{
            if(err){
                console.log(err)
                return
            }else if(!results){
                return res.json({
                    status : false,
                    message : "Tidak berhasil menghapus berita"
                })
            }else{
                return res.json({
                    status : true,
                    data : null,
                    message : "Berhasil menghapus berita"
                })
            }
        })
    }
}