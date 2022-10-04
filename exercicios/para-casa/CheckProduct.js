const CheckProduct = (add) => {
    if (add){
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