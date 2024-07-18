import React from 'react';
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="not-found">
            <p>404 - Không tìm thấy trang</p>
            <p>Go back <Link href='/'>Home</Link></p>
        </div>
    );
};

export default NotFound;