import React from 'react';

function Dashboard(props) {
    const ok = [
        {
            id: 1,
            name: "van"
        },
        {
            id: 2,
            name: "viet"
        }
    ]
    return (
        <div>
           {ok && ok.length > 0 ? (
                <div>
                {ok.map((item) => (
                <div>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                </div>
                ))  
                    
                }
                </div>
           ):(
            <> chua co du lieu</>
           )}
        </div>
    );
}

export default Dashboard;