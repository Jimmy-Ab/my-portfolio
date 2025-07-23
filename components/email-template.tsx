import * as React from "react";
import { FaPhoneAlt, FaEnvelope, FaUserTie, FaCode } from "react-icons/fa";

interface EmailTemplateProps {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  firstName,
  lastName,
  phone,
  service,
  message,
}) => (
  <div style={{
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    color: '#2d3748',
    lineHeight: '1.6',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  }}>
    {/* Header */}
    <div style={{
      background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      padding: '32px 24px',
      textAlign: 'center',
      color: 'white'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '28px',
        fontWeight: 'bold',
        letterSpacing: '0.5px'
      }}>New Project Inquiry</h1>
      <p style={{
        margin: '8px 0 0',
        opacity: 0.9,
        fontSize: '16px'
      }}>You've received a new work request</p>
    </div>

    {/* Main Content */}
    <div style={{ padding: '32px 24px' }}>
      {/* Client Message */}
      <div style={{
        backgroundColor: '#f8fafc',
        padding: '24px',
        borderRadius: '8px',
        marginBottom: '32px',
        borderLeft: '4px solid #4f46e5'
      }}>
        <p style={{ 
          margin: 0,
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#4a5568'
        }}>
          "{message}"
        </p>
        <p style={{
          margin: '16px 0 0',
          fontStyle: 'italic',
          color: '#718096'
        }}>— {firstName} {lastName}</p>
      </div>

      {/* Client Information */}
      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        color: '#2d3748',
        margin: '0 0 16px',
        paddingBottom: '8px',
        borderBottom: '1px solid #e2e8f0'
      }}>Client Details</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {/* Client Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FaUserTie size={24} />
          </div>
          <div>
            <h3 style={{
              margin: '0 0 4px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1a202c'
            }}>{firstName} {lastName}</h3>
            <p style={{
              margin: 0,
              color: '#718096',
              fontSize: '14px'
            }}>Potential Client</p>
          </div>
        </div>

        {/* Contact Details */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              backgroundColor: '#e0e7ff',
              color: '#4f46e5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FaPhoneAlt size={18} />
            </div>
            <div>
              <p style={{
                margin: '0 0 4px',
                fontSize: '14px',
                color: '#718096'
              }}>Phone Number</p>
              <a href={`tel:${phone}`} style={{
                margin: 0,
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#4f46e5',
                textDecoration: 'none'
              }}>{phone}</a>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              backgroundColor: '#e0e7ff',
              color: '#4f46e5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FaEnvelope size={18} />
            </div>
            <div>
              <p style={{
                margin: '0 0 4px',
                fontSize: '14px',
                color: '#718096'
              }}>Email Address</p>
              <a href={`mailto:${email}`} style={{
                margin: 0,
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#4f46e5',
                textDecoration: 'none'
              }}>{email}</a>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              backgroundColor: '#e0e7ff',
              color: '#4f46e5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <FaCode size={18} />
            </div>
            <div>
              <p style={{
                margin: '0 0 4px',
                fontSize: '14px',
                color: '#718096'
              }}>Requested Service</p>
              <p style={{
                margin: 0,
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#4f46e5'
              }}>{service}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        padding: '24px 0 0',
        borderTop: '1px solid #e2e8f0'
      }}>
        <p style={{
          margin: '0 0 8px',
          color: '#718096',
          fontSize: '14px'
        }}>This inquiry was sent through your portfolio website</p>
        <p style={{
          margin: 0,
          fontWeight: 'bold',
          color: '#4f46e5'
        }}>Dalasa Aboma | Software Developer</p>
      </div>
    </div>
  </div>
);