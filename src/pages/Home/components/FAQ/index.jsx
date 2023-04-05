import React, { useState } from 'react';
import {
    Container,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import AccordionFAQ from '../../../../components/AccordionFAQ';

const FAQ = () => {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <section id="faq" >
            <Container className='d-flex justify-content-between flex-wrap'>
                <div>
                    <h2>Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div
                    style={{
                        width: '60%',
                        marginLeft: '100px'
                    }}
                >
                    <Accordion open={open} toggle={toggle}
                    >
                        <AccordionFAQ question="Apa saja syarat yang dibutuhkan?" answer='Usia minimal 21 tahun, dengan minimal 2 tahun pengalaman mengemudi.
                        KTP atau identitas resmi lainnya.
                        SIM A atau SIM Internasional yang masih berlaku.
                        Deposit uang tunai sebagai jaminan.
                        Alamat email dan nomor telepon yang dapat dihubungi.
                        Mengisi formulir pemesanan dan menandatangani kontrak sewa mobil.
                        Membayar biaya sewa mobil dan biaya asuransi (opsional).
                        Mengembalikan mobil dalam kondisi yang sama dengan saat disewa.' id='1' /><br />
                        <AccordionFAQ question="Berapa hari minimal sewa mobil lepas kunci?" answer='24 Jam' id='2' /><br />
                        <AccordionFAQ question="Berapa hari sebelumnya sebaiknya booking sewa mobil?" answer='Seminggu sebelum booking' id='3' /><br />
                        <AccordionFAQ question="Apakah Ada biaya antar-jemput?" answer='Maaf, sementara ini kami belum bisa melakukan layanan antar-jemput' id='4' /><br />
                        <AccordionFAQ question="Bagaimana jika terjadi kecelakaan?" answer='Silakan hubungi kami untuk mengetahui tindakan lebih lanjut' id='5' /><br />

                    </Accordion>
                </div>
            </Container>
        </section>
    )
}

export default FAQ