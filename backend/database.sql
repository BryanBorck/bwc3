--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: luizjunior
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    author_name text,
    author_experience text,
    email text,
    linkedin text,
    title text,
    description text,
    category text,
    difficulty text,
    course_duration integer,
    module_title text,
    module_link text,
    module_details text
);


ALTER TABLE public.courses OWNER TO luizjunior;

--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: luizjunior
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courses_id_seq OWNER TO luizjunior;

--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: luizjunior
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: luizjunior
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: luizjunior
--

COPY public.courses (id, author_name, author_experience, email, linkedin, title, description, category, difficulty, course_duration, module_title, module_link, module_details) FROM stdin;
\.


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: luizjunior
--

SELECT pg_catalog.setval('public.courses_id_seq', 1, false);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: luizjunior
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

