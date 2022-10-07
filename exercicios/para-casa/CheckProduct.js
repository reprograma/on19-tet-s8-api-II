const CheckProduct = (add) => {
    const kAmount = Object.keys(add)
    if (kAmount.length == 3){
        if (add.nome){
            if (add.descricao){
                if (add.valor){
                    return true
                }
            }
        }
    }
    return false
}

module.exports = CheckProduct