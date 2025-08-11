import React from 'react';
import { useParams } from 'react-router-dom';

const parentDetails = [
    { key: 'Name', value: 'John Doe' },
    { key: 'Email', value: 'john.doe@example.com' },
    { key: 'Role', value: 'Parent Admin' },
    { key: 'Status', value: 'Active' },
];

const SubAdminById: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Parent Details for ID: {id}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Field</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {parentDetails.map((detail) => (
                        <tr key={detail.key}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{detail.key}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{detail.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubAdminById;