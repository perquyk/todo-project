import React from 'react'

export default function Tabs(props) {
    const {todos, setSelectedTab, selectedTab} = props;

    const tabs = ['All', 'Open','Completed'];


    return (
        <>
            <nav className="tab-container">
                {tabs.map((tab, tabIndex) => {

                    const qtyOfTasks =
                            tab === 'All' ? todos.length :
                                tab === 'Open' ? todos.filter(val => !val.complete).length :
                                    todos.filter(val => val.complete).length;


                    return(
                        <button onClick={() => {setSelectedTab(tab)}} key={tabIndex} className={"tab-button " + (tab === selectedTab ? ' tab-selected' : '')}>
                            <h4>{tab} <span>({qtyOfTasks})</span></h4>
                        </button>
                    )
                })}
                <hr/>
            </nav>
        </>
    )
}