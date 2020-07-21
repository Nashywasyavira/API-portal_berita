const db = require('../../config/connection');

module.exports = {
    serviceAddBerita: (data, callBack)=>{
        db.query(`insert into berita set ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, results)
            }
        })
    },

    serviceGetBerita:(callBack)=>{
        db.query(`select * from berita join profile on berita.id_profile = profile.id_profile `,
        [],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, results)
            }
        })
    },

    serviceGetBeritaById:(data,callBack)=>{
        db.query(`select * from berita where id_berita = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null,results)
            }
        })
    },

    serviceUpdateBerita:(data,callBack)=>{
        db.query(`select id_profile from berita where id_berita = ?`,
        [data.id_berita],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`update berita set ? where id_berita = ?`,
                [
                    data,
                    data.id_berita
                ]);
                return callBack(null,results[0])
            }
        })
    },

    serviceDeleteBerita:(data,callBack)=>{
        db.query(`select * from berita where id_berita = ?`,
        [data],
        (err,results)=>{
            if(err){
                return callBack(err)
            }else{
                db.query(`delete from berita where id_berita = ?`,
                [data]);
                return callBack(null,results[0])
            }
        })
    }
}