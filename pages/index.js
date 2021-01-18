import Head from "next/head";
import { useState } from "react";
import {
  Box,
  Center,
  Badge,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Button,
  Textarea,
} from "@chakra-ui/react";

export default function Home() {
  let [value, setValue] = useState("");
  let [submitted, setSubmitted] = useState("no");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    if (submitted == "invalid") {
      setSubmitted("no");
    }
  };

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async function handleSubmit(e) {
    if (value == "") {
      setSubmitted("invalid");
      return;
    }
    setSubmitted("loading");
    await fetch(`/api/submit?question=${value}`);
    setSubmitted("submitted");
    setValue("");
    await sleep(2000);
    setSubmitted("no");
  }

  return (
    <SimpleGrid
      columns={[1, 1, 1]}
      overflow="scroll"
      fontSize={["0.8em", "1em", "1em"]}
    >
      <Head>
        <title>GEMS to XCL Transition Q&A</title>
        <meta property="og:title" content="GEMS to XCL Transition Q&A" />
        <meta name="twitter:title" content="GEMS to XCL Transition Q&A" />
        <meta name="og:url" content="gems-xcl-student-q-and-a" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="GEMS to XCL Transition Q&A" />
        <meta property="og:image" content="https://cloud-2zer6ie39.vercel.app/0ownership_transition_q_a.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://cloud-2zer6ie39.vercel.app/0ownership_transition_q_a.png" />
      </Head>
      <Box bg="#26a0db" color="white" p={10}>
        <Center>
          <Box maxWidth="900px">
            <Heading fontSize={["2.5em", "2.5em", "2.5em"]}>
              GEMS to XCL Transition Q&A
            </Heading>
            <Text pt="10px">
              The school is currently going through a critical transition period
              with the ownership change. We know that many of you, the
              students, have questions about this change and wanted to give you
              the chance to comfortably raise those questions.
            </Text>
            <Text pt="10px">
              To support you, we have opened this form for any student to
              present any questions they have. We will then collate the
              appropriate responses and provide them to the school
              administration. Once we hear back from the school, we will forward
              all of the answers to the school community.
            </Text>
          </Box>
        </Center>
      </Box>
      <Box bg="white" p={10}>
        <Box>
          <Center>
            <Box w="100%" maxWidth="900px">
              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="Enter your question"
                size="sm"
                p={3}
                height="250px"
                isInvalid={submitted != "invalid" ? false : true}
              ></Textarea>
              <SimpleGrid columns={[1, 2, 2]}>
                <Button
                  pt={1}
                  mt={3}
                  width="360px"
                  onClick={handleSubmit}
                  disabled
                  isLoading={submitted != "loading" ? false : true}
                >
                  {submitted == "submitted" ? "Sent 🚀" : "Submissions have closed, sorry."}
                </Button>
                <Text
                  mt="22px"
                  textAlign={["left", "right", "right"]}
                  fontWeight="600"
                  color="#4A5568"
                >
                  Student Council 2020-2021
                </Text>
              </SimpleGrid>
            </Box>
          </Center>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
