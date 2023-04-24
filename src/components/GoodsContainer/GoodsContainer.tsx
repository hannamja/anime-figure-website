import { Pagination } from "@mui/material"
import { useRouter } from "next/router"
import { useState, useEffect } from 'react'
import { useQuery } from "react-query";
import GoodItem from "../GoodItem/GoodItem";
const GoodsContainer = (props: any) => {
    const [page, setPage] = useState(1)

    const router = useRouter()
    const { type_collections } = router.query
    useEffect(() => {
        if (router.query.page) {

            setPage(parseInt(router.query.page));
        }
    }, [router.query.page]);
    const { data } = useQuery(
        ["characters", page],
        async () =>
            await fetch(
                `https://rickandmortyapi.com/api/character/?page=${page}`
            ).then((result) => result.json())
    );
    const handlePageChange = (e: any, value: number) => {
        setPage(value);
        router.push(`${type_collections}/?page=${value}`, undefined, { shallow: true });
    }

    return (
        <div className="container m-auto flex flex-col justify-between items-between">
            <div className="flex flex-row justify-center items-center flex-wrap">
                {data?.results?.map((character: any) => (
                    <GoodItem key={character.id} />
                ))}
            </div>
            <Pagination
                className="flex flex-row justify-center items-center my-8"
                count={data?.info.pages}
                page={page}
                onChange={handlePageChange}
            />
        </div>
    )

}
export default GoodsContainer