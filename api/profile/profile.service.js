const db = require("../../config/connection")

module.exports = {
    serviceAddProfile: (data, callBack)=>{
        db.query('insert into profile set ?',
            [data],
            (err, results) =>{
                if(err){
                    return callBack(err);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceGetProfile:(callBack)=> {
        db.query('select * from profile',
            [],
            (err, results,)=>{
                if(err){
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceGetProfileById: (id_profile, callBack)=> {
        db.query('select * from profile where id_profile = ?',
            [id_profile],
            (err, results,)=> {
                if(err){
                    return callBack(err)
                } else {
                    return callBack(null, results)
                }
            }
        )
    },

    serviceUpdateProfile: (data, callBack)=> {
        db.query(`select id_profile from profile where id_profile = ?`,
        [data.id_profile],
            (err, results) =>{
                if(err){
                    return callBack(err)
                } else {
                    db.query(`update profile set ? where id_profile = ?`,
                    [
                        data,
                        data.id_profile
                    ]);
                        return callBack(null, results[0])
                }
            }
        )
    },

    serviceDeleteProfile: (data, callBack)=> {
        db.query(`select id_profile from profile where id_profile = ?`,
            [data],
            (err, result)=>{
                if (err) {
                    return(err)
                } else{
                    db.query(
                        'delete from profile where id_profile = ?',
                        [data]);
                        return callBack(null, result[0])
                }
            })
    },

    serviceGetProfileByEmail: (email, callBack)=> {
        db.query(
            'select * from profile where email = ?',
            [email],
            (err, results) => {
                if(err) {
                    return callBack(err)
                } else {
                    return callBack(null, results[0])
                }
            }
        )
    }
}