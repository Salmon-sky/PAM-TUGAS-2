const getAllUser = async () => {
    try {
        const result = await getUser()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
getAllUser;