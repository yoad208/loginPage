import React from 'react';
import axios from "axios";
import Link from "next/link";

interface Action {
    status: number,
    action: string,
    message: string
}

function Actions() {

    const [actions, setActions] = React.useState<Action[]>([])
    const getActions = async () => {
        const {data} = await axios.get("http://localhost:3000/api/actionsTracker")

        setActions(data.actions)
    }

    const deleteActions = async () => {
        const {data} = await axios.delete("http://localhost:3000/api/actionsTracker")

        setActions(data.actions)
    }

    React.useMemo(() => {
        getActions().then(res => {
            console.log(res)
        })
    }, [actions])

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
        <h2 style={{textAlign: 'center'}}>Actions Tracker!</h2>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'left',
            maxWidth: '82vw',
            width: '100%',
            borderBottom: '1px solid black',
            margin: '10px auto',
        }}>
            <span style={{padding: "10px 5px", maxWidth: '35%', width: '100%'}}>Action</span>
            <span style={{maxWidth: '20%', width: '100%'}}>Status</span>
            <span style={{maxWidth: '100%', width: '100%'}}>Message</span>
            <span style={{maxWidth: '20%', width: '100%'}}>Date</span>
            <span style={{maxWidth: '20%', width: '100%'}}>Time</span>
        </div>
        {actions?.map((item, i: number) => {
                return <div key={i} style={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    textAlign: 'left',
                    backgroundColor: item.status === 201 ? 'rgba(0, 200, 0, .6)' : 'rgba(200, 0, 0, .6)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '80vw',
                    width: '100%',
                    padding: '15px',
                    margin: '10px auto'
                }}>
                    <span className="action" style={{maxWidth: '25%', width: '100%'}}>
                        {item?.action}
                    </span>
                    <span className="action" style={{maxWidth: '25%', width: '100%'}}>
                        {item?.status}
                    </span>
                    <span className="action" style={{maxWidth: '100%', width: '100%'}}>
                        {item?.message}
                    </span>
                    <span className="action" style={{maxWidth: '100%', width: '100%'}}>
                        {item?.date}
                    </span>
                    <span className="action" style={{maxWidth: '100%', width: '100%'}}>
                        {item?.time}
                    </span>
                </div>
            }
        )}
        <div style={{
            margin: '10px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        }}>
            <button
                onClick={deleteActions}
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer'
                }}
            >Clear
            </button>
            <Link href="/"
            >
                <button
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        cursor: 'pointer'
                    }}>
                    Go to Home
                </button>
            </Link>
        </div>
    </div>
}

export default Actions;