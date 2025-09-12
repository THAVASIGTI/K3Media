


export default function Test() {
    const data = [
        {
            id: 1,
            item: 'blablabla',
            detail: "bla bla bla. \n bla bla bla",
            betterDetail:
                `it will
                 also
                 works like this
                 `
        }]

        console.log(data.id);
    return (
        <>
            {data.id}
        </>
    )
}
