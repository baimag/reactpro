 const number =  [2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2]
function num () {
    number.map((e) => {
        if (e<=0)
            return 0
        return e
    })
}

 console.log(num)