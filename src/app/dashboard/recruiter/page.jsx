"use client"
import StatsCards from '@/components/dashboard/StatsCards';
import { TableComponent } from '@/components/dashboard/table';
import FadeUp from '@/components/FadeUp';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboard = () => {

const {data: session, isPending} = useSession()

 if(isPending) {
    return <div className="text-center ">Loading...</div>
 }

const user = session?.user;
// console.log('session:', session);

    return (
        <div className="container mx-auto ">
            <FadeUp >
                <h1 className="text-3xl font-medium mb-5">
                    Welcome Back, <span className="font-bold text-purple-600">{user?.name}</span>
                </h1>
            </FadeUp>
            
            <div >
                <StatsCards></StatsCards>
                <TableComponent></TableComponent>

            </div>
        </div>
    );
};

export default RecruiterDashboard;